import React, {useEffect, useState} from 'react';
import GridElement from "./GridElement";
import NewElementModal from "../../components/modals/NewElementModal";
import {GrFormTrash} from "react-icons/gr";
import SureToDeleteModal from "../../components/modals/SureToDeleteModal";

export default function GridRow({id, setRowIds, rowIds, layoutHandler}) {
    const [elements, setElements] = useState();
    const [open, setOpen] = React.useState(false);
    const [actualElement, setActualElement] = React.useState(null);
    const [isEditing, setIsEditing] = React.useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = React.useState(false);

    useEffect(() => {
        setElements(Object.keys(layoutHandler.getGridLayout()[id]).map((col) => col))
    }, [id, layoutHandler]);

    const parseElements = () => {
        if (!elements) return;
        return elements.map((col) => {
            return (<GridElement layoutHandler={layoutHandler} key={col} row={id} id={col} elements={elements}
                                 setElements={setElements} setOpen={setOpen} setActualElement={setActualElement}
                                 setIsEditing={setIsEditing}></GridElement>)
        });
    }

    const onClickAddNewElement = () => {
        if (elements.length > 3) return;
        setIsEditing(false);
        setActualElement(null);
        setOpen(true);
    };

    const setNewElement = (elementId) => {
        const newElementList = [...elements, elementId];
        setElements(newElementList);
    }

    const deleteRow = () => {
        layoutHandler.deleteRow(id);
        setRowIds(rowIds.filter((row) => row !== id));
    }

    const handleDeleteRow = () => {
        setDeleteModalOpen(true);
    }

    return (
        <div className="grid-row">
            <GrFormTrash style={{cursor: "pointer", fontSize: "50"}} onClick={handleDeleteRow}>ELIMINAR</GrFormTrash>
            <div className="grid-row-elements-container" id={`grid-elements-container-${id}`}>
                {parseElements()}
            </div>
            <div className="add-element-button">
                <h1 onClick={onClickAddNewElement}>+</h1>
            </div>
            <NewElementModal layoutHandler={layoutHandler} actualElement={actualElement} setOpen={setOpen} open={open}
                             row={id} setNewElement={setNewElement} isEditing={isEditing}/>
            <SureToDeleteModal open={deleteModalOpen} setOpen={setDeleteModalOpen} fnApply={deleteRow}/>
        </div>
    );
}
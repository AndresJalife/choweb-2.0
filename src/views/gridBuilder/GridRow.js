import React from 'react';
import GridElement from "./GridElement";
import NewElementModal from "../../components/modals/NewElementModal";
import {GrFormTrash} from "react-icons/gr";
import {FaArrowUp, FaArrowDown} from "react-icons/fa";
import SureToDeleteModal from "../../components/modals/SureToDeleteModal";

export default function GridRow({id, setRowIds, rowIds, layoutHandler, setRefreshTrigger}) {
    const [open, setOpen] = React.useState(false);
    const [actualElement, setActualElement] = React.useState(null);
    const [isEditing, setIsEditing] = React.useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = React.useState(false);
    const [timestamp, setTimestamp] = React.useState(Date.now());

    const parseElements = () => {
        const currentElements = Object.keys(layoutHandler.getGridLayout()[id] || {});
        return currentElements.map((col) => {
            return (<GridElement 
                key={`${col}-${timestamp}`}
                layoutHandler={layoutHandler} 
                row={id} 
                id={col} 
                setOpen={setOpen} 
                setActualElement={setActualElement}
                setIsEditing={setIsEditing} 
                setRefreshTrigger={setRefreshTrigger}
                setTimestamp={setTimestamp}
            />)
        });
    }

    const onClickAddNewElement = () => {
        const currentElements = Object.keys(layoutHandler.getGridLayout()[id] || {});
        if (currentElements.length > 3) return;
        setIsEditing(false);
        setActualElement(null);
        setOpen(true);
    };

    const setNewElement = (elementId) => {
        setTimestamp(Date.now());
        setRefreshTrigger(prev => prev + 1);
    }

    const deleteRow = () => {
        layoutHandler.deleteRow(id);
        setRowIds(Object.keys(layoutHandler.getGridLayout()));
        setRefreshTrigger(prev => prev + 1);
    }

    const handleDeleteRow = () => {
        setDeleteModalOpen(true);
    }

    const moveRowUp = () => {
        layoutHandler.moveRowUp(id);
        setRowIds(Object.keys(layoutHandler.getGridLayout()));
        setRefreshTrigger(prev => prev + 1);
    };

    const moveRowDown = () => {
        layoutHandler.moveRowDown(id);
        setRowIds(Object.keys(layoutHandler.getGridLayout()));
        setRefreshTrigger(prev => prev + 1);
    };

    return (
        <div className="grid-row">
            <div className="row-controls">
                <FaArrowUp style={{cursor: "pointer", fontSize: "20px", marginRight: "10px"}} onClick={moveRowUp} />
                <FaArrowDown style={{cursor: "pointer", fontSize: "20px", marginRight: "10px"}} onClick={moveRowDown} />
                <GrFormTrash style={{cursor: "pointer", fontSize: "20px"}} onClick={handleDeleteRow} />
            </div>
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
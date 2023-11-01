import React, {useState} from 'react';
import GridElement from "./GridElement";
import NewElementModal from "../../components/modals/NewElementModal";
import ProjectDataSingleton from "../../logic/ProjectDataSingleton";

export default function GridRow({id, setRowIds, rowIds}){
    const [elements, setElements] = useState(Object.keys(ProjectDataSingleton.getGridLayout()[id]).map((col) => col));
    const [open, setOpen] = React.useState(false);
    const [actualElement, setActualElement] = React.useState(null);
    const [isEditing, setIsEditing] = React.useState(false);

    const parseElements = () => {
        return elements.map((col) => {
            return (<GridElement key={col} row={id} id={col} elements={elements} setElements={setElements} setOpen={setOpen} setActualElement={setActualElement} setIsEditing={setIsEditing}></GridElement>)
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

    function onClickDeleteRow() {
        ProjectDataSingleton.deleteRow(id);
        setRowIds(rowIds.filter((row) => row !== id));
    }

    return (
        <div className="grid-row">
            <p style={{cursor:"pointer"}} onClick={onClickDeleteRow}>ELIMINAR</p>
            <div className="grid-row-elements-container" id={`grid-elements-container-${id}`}>
                {parseElements()}
            </div>
            <div className="add-element-button">
                <h1 onClick={onClickAddNewElement}>+</h1>
            </div>
            <NewElementModal actualElement={actualElement} setOpen={setOpen} open={open} row={id} setNewElement={setNewElement} isEditing={isEditing}/>
        </div>
    );
}
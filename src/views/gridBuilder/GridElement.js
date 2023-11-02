import React from 'react';
import { GrFormTrash } from "react-icons/gr";
import {AiFillEdit} from "react-icons/ai";

export default function GridElement({id, row, setElements, elements, setOpen, setActualElement, setIsEditing, layoutHandler}){
    function onClickDeleteElement() {
        layoutHandler.deleteProject(row, id);
        setElements(elements.filter((col) => col !== id));
    }

    function onClickEdit() {
        setIsEditing(true);
        const element = layoutHandler.getProjectData(id);
        setActualElement(element);
        setOpen(true);
    }

    return (
        <div className="grid-element">
            <h1>{id}</h1>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <GrFormTrash onClick={onClickDeleteElement} style={{cursor: "pointer",fontSize: "32"}}/>
                <AiFillEdit onClick={onClickEdit} style={{cursor: "pointer",fontSize: "32"}} >edit</AiFillEdit>
            </div>
        </div>
    )
}
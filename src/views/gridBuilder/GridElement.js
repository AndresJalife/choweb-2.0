import React from 'react';
import { GrFormTrash } from "react-icons/gr";
import ProjectDataSingleton from "../../logic/ProjectDataSingleton";

export default function GridElement({id, row, setElements, elements, setOpen, setActualElement, setIsEditing}){
    function onClickDeleteElement() {
        ProjectDataSingleton.deleteProject(row, id);
        setElements(elements.filter((col) => col !== id));
    }

    function onClickEdit() {
        setIsEditing(true);
        const element = ProjectDataSingleton.getProjectData(id);
        setActualElement(element);
        setOpen(true);
    }

    return (
        <div className="grid-element">

            <h1>{id}</h1>
            <GrFormTrash onClick={onClickDeleteElement} style={{cursor: "pointer",fontSize: "32"}}/>
            <p onClick={onClickEdit}>edit</p>
        </div>
    )
}
import React from 'react';
import { GrFormTrash } from "react-icons/gr";
import ProjectDataSingleton from "../../logic/ProjectDataSingleton";

export default function GridElement({id, row, setElements, elements, setOpen, setActualElement}){
    function onClickDeleteElement() {
        ProjectDataSingleton.deleteProject(row, id);
        setElements(elements.filter((col) => col !== id));
    }

    function onClickEdit() {
        setActualElement(ProjectDataSingleton.getProjectData(id));
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
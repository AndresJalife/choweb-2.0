import React from 'react';
import {GrFormTrash} from "react-icons/gr";
import {AiFillEdit} from "react-icons/ai";
import SureToDeleteModal from "../../components/modals/SureToDeleteModal";

export default function GridElement({
                                        id,
                                        row,
                                        setElements,
                                        elements,
                                        setOpen,
                                        setActualElement,
                                        setIsEditing,
                                        layoutHandler
                                    }) {
    const [deleteModalOpen, setDeleteModalOpen] = React.useState(false);
    const onClickDeleteElement = () => {
        setDeleteModalOpen(true);
    }

    const deleteElement = () => {
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
        <div className="grid-element-container">
            <div className="grid-element">
                <h1>{id}</h1>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <GrFormTrash onClick={onClickDeleteElement} style={{cursor: "pointer", fontSize: "32"}}/>
                    <AiFillEdit onClick={onClickEdit} style={{cursor: "pointer", fontSize: "32"}}>edit</AiFillEdit>
                </div>
            </div>
            <SureToDeleteModal open={deleteModalOpen} setOpen={setDeleteModalOpen} fnApply={deleteElement}/>
        </div>
    )
}
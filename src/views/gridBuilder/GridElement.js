import React from 'react';
import {GrFormTrash} from "react-icons/gr";
import {AiFillEdit} from "react-icons/ai";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import SureToDeleteModal from "../../components/modals/SureToDeleteModal";

export default function GridElement({
    id,
    row,
    setOpen,
    setActualElement,
    setIsEditing,
    layoutHandler,
    setRefreshTrigger,
    setTimestamp
}) {
    const [deleteModalOpen, setDeleteModalOpen] = React.useState(false);

    const onClickDeleteElement = () => {
        setDeleteModalOpen(true);
    }

    const deleteElement = () => {
        layoutHandler.deleteProject(row, id);
        setTimestamp(Date.now());
        setRefreshTrigger(prev => prev + 1);
    }

    const moveElementLeft = () => {
        layoutHandler.moveElementLeft(row, id);
        setTimestamp(Date.now());
        setRefreshTrigger(prev => prev + 1);
    };

    const moveElementRight = () => {
        layoutHandler.moveElementRight(row, id);
        setTimestamp(Date.now());
        setRefreshTrigger(prev => prev + 1);
    };

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
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px'}}>
                    <FaArrowLeft onClick={moveElementLeft} style={{cursor: "pointer", fontSize: "20px"}} />
                    <FaArrowRight onClick={moveElementRight} style={{cursor: "pointer", fontSize: "20px"}} />
                    <GrFormTrash onClick={onClickDeleteElement} style={{cursor: "pointer", fontSize: "20px"}}/>
                    <AiFillEdit onClick={onClickEdit} style={{cursor: "pointer", fontSize: "20px"}}/>
                </div>
            </div>
            <SureToDeleteModal open={deleteModalOpen} setOpen={setDeleteModalOpen} fnApply={deleteElement}/>
        </div>
    )
}
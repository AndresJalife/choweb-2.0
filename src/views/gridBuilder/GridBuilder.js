import React, {useState} from 'react';
import GridRow from "./GridRow";
import ProjectDataSingleton from "../../logic/ProjectDataSingleton";
import './gridBuilder.css';
function GridBuilder(){

    const [rowIds, setRowIds] = useState(Object.keys(ProjectDataSingleton.getGridLayout()).map((row) => row));

    const parseRows = () => {
        return rowIds.map((row) => {
            return <GridRow key={row} id={row} rowIds={rowIds} setRowIds={setRowIds}/>
        })
    }
    const onClickAddNewRow = () => {
        const newRowId = ProjectDataSingleton.newRow();
        // Create a new element with null info
        const allRows = [...rowIds, newRowId];
        setRowIds(allRows);
    };
    const onClickUpload = () => {
        ProjectDataSingleton.upload().then(r => alert("Subido correctamente"));
    };

    return (
        <div id="grid-builder">
            <h1>GENERADOR DE GRILLA</h1>
            <div id="grid-container">
                {parseRows(rowIds)}
            </div>
            <div className="add-element-button">
                <h1 onClick={onClickAddNewRow}>+</h1>
            </div>
            <h1 onClick={onClickUpload} style={{cursor: "pointer"}}>Guardar grilla</h1>

        </div>
    )
}

export default GridBuilder;
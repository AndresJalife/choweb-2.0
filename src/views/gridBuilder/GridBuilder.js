import React, {useEffect, useState} from 'react';
import GridRow from "./GridRow";
import './gridBuilder.css';
import LandingPageGridDataHandler from "../../logic/GridDataHandler/LandingPageGridDataHandler";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import VideoclipsGridDataHandler from "../../logic/GridDataHandler/VideoclipsGridDataHandler";
import OursGridDataHandler from "../../logic/GridDataHandler/OursGridDataHandler";
import AdvertisementGridDataHandler from "../../logic/GridDataHandler/AdvertisementGridDataHandler";

function GridBuilder({signOut}) {

    const [rowIds, setRowIds] = useState(Object.keys(LandingPageGridDataHandler.getGridLayout()).map((row) => row));
    const [rows, setRows] = useState();
    const [type, setType] = useState('landing');
    const [layoutHandler, setLayoutHandler] = useState(LandingPageGridDataHandler);

    // initialize rows
    useEffect(() => {
        setRows(parseRows());
    }, [rowIds]);

    const refreshRowsIds = (handler) => {
        setRowIds(Object.keys(handler.getGridLayout()).map((row) => row));
    }

    const handleGridTypeChange = (event) => {
        setType(event.target.value);
        // eslint-disable-next-line default-case
        switch (event.target.value) {
            case 'landing':
                setLayoutHandler(LandingPageGridDataHandler);
                refreshRowsIds(LandingPageGridDataHandler);
                break;
            case 'video':
                setLayoutHandler(VideoclipsGridDataHandler);
                refreshRowsIds(VideoclipsGridDataHandler);
                break;
            case 'ours':
                setLayoutHandler(OursGridDataHandler);
                refreshRowsIds(OursGridDataHandler);
                break;
            case 'advertisement':
                setLayoutHandler(AdvertisementGridDataHandler);
                refreshRowsIds(AdvertisementGridDataHandler);
                break;
        }
    };

    const parseRows = () => {
        return rowIds.map((row) => {
            return <GridRow key={row} id={row} rowIds={rowIds} setRowIds={setRowIds} layoutHandler={layoutHandler}/>
        })
    }
    const onClickAddNewRow = () => {
        const newRowId = layoutHandler.newRow();
        const allRows = [...rowIds, newRowId];
        setRowIds(allRows);
    };
    const onClickUpload = () => {
        layoutHandler.upload().then(r => alert("Subido correctamente. Esperar un ratito para verlo reflejado."));
    };

    return (
        <div id="grid-builder">
            <button onClick={signOut}>Cerrar Sesión</button>
            <h1>GENERADOR DE GRILLA</h1>
            <FormControl style={{minWidth: '30%', margin: '1%'}} variant='standard'>
                <InputLabel>Pantalla a editar</InputLabel>
                <Select
                    labelId="type-input"
                    id="demo-simple-select"
                    value={type}
                    label="Age"
                    onChange={handleGridTypeChange}>
                    <MenuItem value={'landing'}>Página de inicio</MenuItem>
                    <MenuItem value={'video'}>Página de videoclips</MenuItem>
                    <MenuItem value={'ours'}>Página de propio</MenuItem>
                    <MenuItem value={'advertisement'}>Página de publicidad</MenuItem>
                </Select>
            </FormControl>
            <div id="grid-container">
                {rows}
            </div>
            <div className="add-element-button">
                <h1 onClick={onClickAddNewRow}>+</h1>
            </div>
            <h1 onClick={onClickUpload} style={{cursor: "pointer"}}>Guardar grilla</h1>
        </div>
    )
}

export default GridBuilder;
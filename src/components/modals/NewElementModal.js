import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {CircularProgress, FormControl, Input, InputLabel, MenuItem, Select} from "@mui/material";
import {SelectChangeEvent} from "@mui/material";
import {useEffect} from "react";
import './Modal.css';
import {createOrUpdateS3File} from "../../logic/S3Handler";
import {normalizeAndUnSpace} from "../../logic/Util";
export default function NewElementModal({open, setOpen, row, setNewElement, actualElement, isEditing, layoutHandler}) {
    const [name, setName] = React.useState(actualElement == null ? '' : actualElement.id);
    const [type, setType] = React.useState(actualElement == null ? '' : actualElement.type);
    const [imgSrc, setImgSrc] = React.useState(actualElement == null ? '' : actualElement.imgSrc);
    const [gifSrc, setGifSrc] = React.useState(actualElement == null ? '' : actualElement.gifSrc);
    const [vidSrc, setVidSrc] = React.useState(actualElement == null ? '' : actualElement.vidSrc);
    const [bgColor, setBgColor] = React.useState(actualElement == null ? '' : actualElement.bgColor);
    const [description, setDescription] = React.useState(actualElement == null ? '' : actualElement.description);
    const [fontColor, setFontColor] = React.useState(actualElement == null ? '' : actualElement.fontColor);
    const [borderColor, setBorderColor] = React.useState(actualElement == null ? '' : actualElement.borderColor);
    const [isLoading, setLoading] = React.useState(false);

    useEffect(() => {
        if (actualElement == null) {
            setName('');
            setType('');
            setImgSrc('');
            setGifSrc('');
            setVidSrc('');
            setBgColor('');
            setDescription('');
            setFontColor('');
            setBorderColor('');
            return;
        }
        setName(actualElement.id);
        setType(actualElement.type);
        setImgSrc(actualElement.imgSrc);
        setGifSrc(actualElement.gifSrc);
        setVidSrc(actualElement.vidSrc);
        setBgColor(actualElement.bgColor);
        setDescription(actualElement.description);
        setFontColor(actualElement.fontColor);
        setBorderColor(actualElement.borderColor);
    }, [actualElement]);
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.value;
        setName(normalizeAndUnSpace(name));
    };
    const handleGeneric = (event: React.ChangeEvent<HTMLInputElement>, setFn) => {
        setFn(event.target.files[0]);
    };

    const handleClose = () => {
        setVidSrc(null);
        setGifSrc(null);
        setImgSrc(null);
        setOpen(false);
    }

    const saveFile = async (file) => {
        if (file != null && file !== '' && isEditing !== true) {
            const fileName = normalizeAndUnSpace(file.name);
            const fileUrl =  await createOrUpdateS3File(fileName, file, 'resources');
            return "https://d2njbbkhc1pb2y.cloudfront.net/public/" + fileUrl;
        }
    }

    const create = async () => {
        if (name === '' || type === '') return;
        // let imgUrl = null;
        // let gifUrl = null;
        // if (imgSrc !== null || gifSrc !== null) {
        //     setLoading(true);
        //     imgUrl = await saveFile(imgSrc);
        //     gifUrl = await saveFile(gifSrc);
        //     setLoading(false);
        // }
        const data = {
            id: name,
            type: type,
            imgSrc: imgSrc,
            gifSrc: gifSrc,
            vidSrc: vidSrc,
            bgColor: bgColor,
            description: description,
            fontColor: fontColor,
            borderColor: borderColor
        };
        if (actualElement == null) {
            layoutHandler.newProject(row, data);
            setNewElement(name);
        } else {
            layoutHandler.updateProject(row, data);
        }
        setOpen(false);
    }

    return (
        <div>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" style={{overflow: 'scroll'}}>
                 <Box className="box-new-element-modal">
                     {isLoading ? <CircularProgress /> :
                    <div className="container-new-element-modal">
                         <FormControl className="formControl" style={{marginTop: '3%'}} variant="standard">
                             <InputLabel error htmlFor="name-input">Nombre</InputLabel>
                             <Input id="name-input" aria-describedby="my-helper-text" value={name} onChange={handleNameChange}/>
                         </FormControl>
                         <FormControl style={{minWidth: '30%', margin: '1%'}}>
                             <InputLabel error>Type</InputLabel>
                             <Select labelId="type-input" id="demo-simple-select" value={type} label="Age" onChange={(event) => handleGeneric(event, setType)}>
                                 <MenuItem value={'gif'}>GIF</MenuItem>
                                 <MenuItem value={'video'}>Video</MenuItem>
                             </Select>
                         </FormControl>
                         <FormControl className="formControl">
                             <InputLabel className="margin-top-label" htmlFor="bg-color-input">URL de la imagen</InputLabel>
                             <Input id="bg-color-input" aria-describedby="my-helper-text" value={imgSrc} onChange={(event) => handleGeneric(event, setImgSrc)}/>
                         </FormControl>
                         <FormControl className="formControl">
                             <InputLabel className="margin-top-label" htmlFor="bg-color-input">URL del GIF</InputLabel>
                             <Input id="bg-color-input" aria-describedby="my-helper-text" value={gifSrc} onChange={(event) => handleGeneric(event, setGifSrc)}/>
                         </FormControl>
                         <FormControl className="formControl" variant="standard">
                             <InputLabel className="margin-top-label" htmlFor="bg-color-input">URL del video (modo 'embed')</InputLabel>
                             <Input id="bg-color-input" aria-describedby="my-helper-text" value={vidSrc} onChange={(event) => handleGeneric(event, setVidSrc)}/>
                         </FormControl>
                         <FormControl className="formControl" variant="standard">
                             <InputLabel htmlFor="bg-color-input">Color de fondo (en hexa, incluir '#')</InputLabel>
                             <Input id="bg-color-input" aria-describedby="my-helper-text" value={bgColor} onChange={(event) => handleGeneric(event, setBgColor)}/>
                         </FormControl>
                         <FormControl className="formControl" variant="standard">
                             <InputLabel htmlFor="font-color-input">Color de fuente (en hexa, incluir '#')</InputLabel>
                             <Input id="font-color-input" aria-describedby="my-helper-text" value={fontColor} onChange={(event) => handleGeneric(event, setFontColor)}/>
                         </FormControl>
                         <FormControl className="formControl" variant="standard">
                             <InputLabel htmlFor="border-color-input">Color de borde (en hexa, incluir '#')</InputLabel>
                             <Input id="border-color-input" aria-describedby="my-helper-text" value={borderColor} onChange={(event) => handleGeneric(event, setBorderColor)}/>
                         </FormControl>
                         <FormControl className="formControl" style={{height: '15%'}} variant="standard">
                             <InputLabel htmlFor="description-input">Descripción</InputLabel>
                             <Input multiline={true} minRows="5" id="description-input" aria-describedby="my-helper-text" value={description} onChange={(event) => handleGeneric(event, setDescription)}/>
                         </FormControl>
                         <div>
                             <Button onClick={handleClose}>Cancelar</Button>
                             <Button onClick={create}>Guardar</Button>
                         </div>
                    </div>}
                </Box>
            </Modal>
        </div>
    );
}
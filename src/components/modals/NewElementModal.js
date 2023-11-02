import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {FormControl, Input, InputLabel, MenuItem, Select} from "@mui/material";
import {SelectChangeEvent} from "@mui/material";
import {useEffect} from "react";
import './NewElementModal.css';
import {createOrUpdateS3File} from "../../logic/S3Handler";
import {normalizeAndUnSpace} from "../../logic/Util";
// import LandingPageGridDataHandler from "../../logic/GridDataHandler/LandingPageGridDataHandler";
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
    const handleTypeChange = (event: SelectChangeEvent) => {
        setType(event.target.value);
    };
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.value;
        setName(normalizeAndUnSpace(name));
    };
    const handleImgSrcChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImgSrc(event.target.files[0]);
    };
    const handleGifSrcChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGifSrc(event.target.files[0]);
    };
    const handleVidSrcChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVidSrc(event.target.value);
    };
    const handleBgColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBgColor(event.target.value);
    };
    const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };
    const handleFontColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFontColor(event.target.value);
    };
    const handleBorderColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBorderColor(event.target.value);
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
        const imgUrl = await saveFile(imgSrc);
        const gifUrl = await saveFile(gifSrc);
        const data = {
            id: name,
            type: type,
            imgSrc: imgUrl,
            gifSrc: gifUrl,
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
        console.log(layoutHandler.getGridLayout());
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{overflow: 'scroll'}}
            >
                 <Box className="box-new-element-modal">
                    <FormControl className="formControl" style={{marginTop: '3%'}} variant="standard">
                        <InputLabel error htmlFor="name-input">Nombre</InputLabel>
                        <Input id="name-input" aria-describedby="my-helper-text" value={name} onChange={handleNameChange}/>
                    </FormControl>
                    <FormControl style={{minWidth: '30%', margin: '1%'}}>
                        <InputLabel error>Type</InputLabel>
                        <Select labelId="type-input" id="demo-simple-select" value={type} label="Age" onChange={handleTypeChange}>
                            <MenuItem value={'gif'}>GIF</MenuItem>
                            <MenuItem value={'video'}>Video</MenuItem>
                        </Select>
                    </FormControl>
                     <FormControl style={{margin: '1%'}}>
                         {imgSrc == null || imgSrc === '' ?
                             <Button variant="contained" component="label">Upload Image
                                 <input type="file" accept="image/png, image/jpeg" onChange={handleImgSrcChange} hidden/>
                             </Button> :
                                 <Button component="label">
                                     Edit Image
                                     <input type="file" accept="image/png, image/jpeg" onChange={handleImgSrcChange} hidden/>
                                 </Button>}
                     </FormControl>
                     <FormControl>
                         {gifSrc == null || gifSrc === ''?
                             <Button
                                 variant="contained" component="label">Upload Gif
                                 <input type="file" accept=".gif" hidden onChange={handleGifSrcChange}/>
                             </Button> :
                                 <Button component="label">
                                     Edit GIF
                                     <input type="file" accept=".gif" hidden onChange={handleGifSrcChange}/>
                                 </Button>}
                     </FormControl>
                     <FormControl className="formControl" variant="standard">
                         <InputLabel className="margin-top-label" htmlFor="bg-color-input">URL del video</InputLabel>
                         <Input id="bg-color-input" aria-describedby="my-helper-text" value={vidSrc} onChange={handleVidSrcChange}/>
                     </FormControl>
                    <FormControl className="formControl" variant="standard">
                        <InputLabel htmlFor="bg-color-input">Color de fondo</InputLabel>
                        <Input id="bg-color-input" aria-describedby="my-helper-text" value={bgColor} onChange={handleBgColorChange}/>
                    </FormControl>
                    <FormControl className="formControl" variant="standard">
                        <InputLabel htmlFor="font-color-input">Color de fuente</InputLabel>
                        <Input id="font-color-input" aria-describedby="my-helper-text" value={fontColor} onChange={handleFontColorChange}/>
                    </FormControl>
                    <FormControl className="formControl" variant="standard">
                        <InputLabel htmlFor="border-color-input">Color de borde</InputLabel>
                        <Input id="border-color-input" aria-describedby="my-helper-text" value={borderColor} onChange={handleBorderColorChange}/>
                    </FormControl>
                     <FormControl className="formControl" style={{height: '15%'}} variant="standard">
                         <InputLabel htmlFor="description-input">Descripción</InputLabel>
                         <Input multiline="true" minRows="5" id="description-input" aria-describedby="my-helper-text" value={description} onChange={handleDescriptionChange}/>
                     </FormControl>
                     <div>
                         <Button onClick={handleClose}>Cancelar</Button>
                         <Button onClick={create}>Guardar</Button>
                     </div>
                </Box>
            </Modal>
        </div>
    );
}
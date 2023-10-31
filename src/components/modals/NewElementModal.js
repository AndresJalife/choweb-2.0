import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import ProjectDataSingleton from "../../logic/ProjectDataSingleton";
import {FormControl, Input, InputLabel, MenuItem, Select} from "@mui/material";
import {SelectChangeEvent} from "@mui/material";
import {useEffect} from "react";

export default function NewElementModal({open, setOpen, row, setNewElement, actualElement}) {
    const handleClose = () => {
        setVidSrc(null);
        setGifSrc(null);
        setImgSrc(null);
        setOpen(false);
    }
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
        setName(event.target.value);
    };
    const handleImgSrcChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImgSrc(event.target.value);
    };
    const handleGifSrcChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGifSrc(event.target.value);
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

    const create = () => {
        if (name === '' || type === '') return;
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
            ProjectDataSingleton.newProject(row, data);
            setNewElement(name);
        } else {
            ProjectDataSingleton.updateProject(row, data);
        }
        setOpen(false);
        console.log(ProjectDataSingleton.getGridLayout());
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                 <Box className="box-new-element-modal">
                    <FormControl>
                        <InputLabel error htmlFor="name-input">Nombre</InputLabel>
                        <Input id="name-input" aria-describedby="my-helper-text" value={name} onChange={handleNameChange}/>
                    </FormControl>
                     {/*Input select for 'type' with options 'gif' and 'video'/*/}
                    <FormControl style={{minWidth: '30%', margin: '1%'}}>
                        <InputLabel error>Type</InputLabel>
                        <Select
                            labelId="type-input"
                            id="demo-simple-select"
                            value={type}
                            label="Age"
                            onChange={handleTypeChange}>
                            <MenuItem value={'gif'}>Gif</MenuItem>
                            <MenuItem value={'video'}>Video</MenuItem>
                        </Select>
                    </FormControl>
                     <FormControl style={{margin: '1%'}}>
                         {imgSrc == null ?
                             <Button
                                 variant="contained"
                                 component="label"
                             >
                                 Upload Image
                                 <input
                                     type="file"
                                     accept="image/png, image/jpeg"
                                     onChange={handleImgSrcChange}
                                     hidden
                                 />
                             </Button> : 'Image Ok'}
                     </FormControl>
                     <FormControl style={{margin: '1%'}}>
                         {gifSrc == null ?
                             <Button
                                 variant="contained"
                                 component="label"
                             >
                                 Upload Gif
                                 <input
                                     type="file"
                                     accept=".gif"
                                     hidden
                                     onChange={handleGifSrcChange}
                                 />
                             </Button> : 'Gif Ok'}
                     </FormControl>
                    <FormControl style={{margin: '1%'}}>
                        {vidSrc == null ?
                            <Button
                                variant="contained"
                                component="label"
                            >
                            Upload Video
                            <input
                                type="file"
                                accept=".mp4"
                                hidden
                                onChange={handleVidSrcChange}
                            />
                        </Button> : 'Video Ok'}
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="bg-color-input">Color de fondo</InputLabel>
                        <Input id="bg-color-input" aria-describedby="my-helper-text" value={bgColor} onChange={handleBgColorChange}/>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="description-input">Descripción</InputLabel>
                        <Input id="description-input" aria-describedby="my-helper-text" value={description} onChange={handleDescriptionChange}/>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="font-color-input">Color de fuente</InputLabel>
                        <Input id="font-color-input" aria-describedby="my-helper-text" value={fontColor} onChange={handleFontColorChange}/>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="border-color-input">Color de borde</InputLabel>
                        <Input id="border-color-input" aria-describedby="my-helper-text" value={borderColor} onChange={handleBorderColorChange}/>
                    </FormControl>
                     <Button onClick={create}>Guardar</Button>
                     <Button onClick={handleClose}>Cancelar</Button>
                </Box>
            </Modal>
        </div>
    );
}
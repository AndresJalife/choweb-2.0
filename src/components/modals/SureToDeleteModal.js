import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

export default function SureToDeleteModal({open, setOpen, fnApply, text}) {

    const handleClose = () => setOpen(false);

    const handleDelete = () => {
        fnApply();
        handleClose();
    }

    return (
        <div>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title"
                   aria-describedby="modal-modal-description" style={{overflow: 'scroll'}}>
                <Box className="delete-modal">
                    <p>¿Estás seguro que deseas eliminarlo?</p>
                    <div>
                        <Button onClick={handleClose}>Cancelar</Button>
                        <Button onClick={handleDelete}>Eliminar</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
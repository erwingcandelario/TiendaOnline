// MessageModal.js
import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const MessageModal = ({ show, onHide, onSave, showMessage }) => {
    const handleSaveAndClose = () => {
        onSave();
        onHide();
        showMessage(true); // Mostrar el mensaje de compra realizada
    };

    return (
        <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton={false} style={{ backgroundColor: '#DEDED5', color: 'black' }}>
                <Modal.Title id="contained-modal-title-vcenter">Online</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>¿Está seguro de realizar la compra?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button style={{ marginRight: '10px' }} variant="primary" onClick={handleSaveAndClose}>
                    Comprar
                </Button>
                <Button style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white', border: 'none' }} onClick={onHide}>
                    Cancelar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default MessageModal;

import { Button, Modal } from 'react-bootstrap';

const messageModal = (props) => {
	return (
		<Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">Online</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>¿Está seguro de realizar la compra?</p>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="primary" onClick={props.onHide}>
					Comprar
				</Button>
				<Button variant="secondary" onClick={props.onHide}>
					Cancelar
				</Button>
			</Modal.Footer>
		</Modal>
	);
};
export default messageModal;

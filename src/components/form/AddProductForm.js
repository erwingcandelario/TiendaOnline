import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
const AddProductForm = (props) => {
	const initialFormState = {
		id: null,
		nombre: '',
		empresa: '',
		precio: '',
		descripcionCorta: '',
		imagen: '',
		descripcionLarga: '',
	};
	const [product, setProduct] = useState(initialFormState);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		console.log(event.target);
		setProduct({ ...product, [name]: value });
	};

	return (
		<Form
			onSubmit={(event) => {
				event.preventDefault();
				if (!product.nombre || !product.empresa) return;

				props.addProduct(product);
				setProduct(initialFormState);
			}}
		>
			<Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
				<Form.Label column sm="2">
					Nombre Producto
				</Form.Label>
				<Col sm="10">
					<Form.Control
						type="text"
						name="nombre"
						value={product.nombre}
						onChange={handleInputChange}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
				<Form.Label column sm="2">
					Empresa
				</Form.Label>
				<Col sm="10">
					<Form.Control
						type="text"
						name="empresa"
						value={product.empresa}
						onChange={handleInputChange}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
				<Form.Label column sm="2">
					Precio
				</Form.Label>
				<Col sm="10">
					<Form.Control
						type="text"
						name="precio"
						value={product.precio}
						onChange={handleInputChange}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
				<Form.Label column sm="2">
					Descripcion Corta
				</Form.Label>
				<Col sm="10">
					<Form.Control
						type="text"
						name="descripcionCorta"
						value={product.descripcionCorta}
						onChange={handleInputChange}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
				<Form.Label column sm="2">
					Imagen
				</Form.Label>
				<Col sm="10">
					<Form.Control
						type="text"
						name="imagen"
						value={product.imagen}
						onChange={handleInputChange}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
				<Form.Label column sm="2">
					Descripcion larga
				</Form.Label>
				<Col sm="10">
					<Form.Control
						type="text"
						name="descripcionLarga"
						value={product.descripcionLarga}
						onChange={handleInputChange}
					/>
				</Col>
			</Form.Group>
			<Button variant="outline-primary" type="submit">
				Agregar producto
			</Button>{' '}
		</Form>
	);
};

export default AddProductForm;

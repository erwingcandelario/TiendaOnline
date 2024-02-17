import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { createProduct } from '../../services/productListService';
const AddProductForm = (props) => {
	const initialFormState = {
		name: '',
		company: '',
		price: '',
		description: '',
		urlImage: '',
		largeDescription: '',
		score: '',
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
				if (!product.name || !product.company) return;

				const fetchData = async () => {
					const data = await createProduct(product);
					props.addProduct(data);
				};

				fetchData();

				setProduct(initialFormState);
			}}
		>
			<Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
				<Form.Label column sm="2">
					Nombre Producto
				</Form.Label>
				<Col sm="10">
					<Form.Control type="text" name="name" value={product.name} onChange={handleInputChange} />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
				<Form.Label column sm="2">
					Empresa
				</Form.Label>
				<Col sm="10">
					<Form.Control
						type="text"
						name="company"
						value={product.company}
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
						name="price"
						value={product.price}
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
						name="description"
						value={product.description}
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
						name="urlImage"
						value={product.urlImage}
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
						name="largeDescription"
						value={product.largeDescription}
						onChange={handleInputChange}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
				<Form.Label column sm="2">
					Stock
				</Form.Label>
				<Col sm="10">
					<Form.Control
						type="text"
						name="score"
						value={product.score}
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

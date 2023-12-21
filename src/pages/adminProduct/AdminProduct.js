import React, { useEffect, useState } from 'react';
import AddProductForm from '../../components/form/AddProductForm';
import EditProductForm from '../../components/form/EditProductForm';
import Loader from '../../components/loader/Loader';
import ProductTable from '../../components/table/ProductTable';
import UseLoader from '../../hook/UseLoader';
import { getAllProducts } from '../../services/productListService';
const AdminProduct = () => {
	const [loading, setLoading] = UseLoader(false);
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			getAllProducts.length > 0 ? setLoading(false) : setLoading(true);
		}, 1000);
	}, [setLoading]);
	const productData = getAllProducts;
	const initialFormState = {
		id: null,
		nombre: '',
		empresa: '',
		precio: '',
		descripcionCorta: '',
		imagen: '',
		descripcionLarga: '',
	};

	const [products, setProducts] = useState(productData);
	const [editing, setEditing] = useState(false);
	const [currentProduct, setCurrentProduct] = useState(initialFormState);

	const addProduct = (product) => {
		product.id = products.length + 1;
		setProducts([...products, product]);
	};

	const editRow = (product) => {
		setEditing(true);
		setCurrentProduct({
			id: product.id,
			nombre: product.nombre,
			empresa: product.empresa,
			precio: product.precio,
			descripcionCorta: product.descripcionCorta,
			imagen: product.imagen,
			descripcionLarga: product.descripcionLarga,
		});
	};

	const deleteProduct = (id) => {
		setEditing(false);
		setProducts(products.filter((product) => product.id !== id));
	};

	const updateProduct = (id, updatedProduct) => {
		setEditing(false);
		setProducts(products.map((product) => (product.id === id ? updatedProduct : product)));
	};

	return (
		<div className="container">
			<h1>React CRUD with Hooks</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<div>
							<h2>Editar producto</h2>
							<EditProductForm
								editing={editing}
								setEditing={setEditing}
								currentProduct={currentProduct}
								updateProduct={updateProduct}
							/>
						</div>
					) : (
						<div>
							<h2>Agregar producto</h2>
							<AddProductForm addProduct={addProduct} />
						</div>
					)}
				</div>
				<div className="flex-large">
					<h2>Vista de productos</h2>
					{loading ? (
						<Loader />
					) : (
						<ProductTable products={products} editRow={editRow} deleteProduct={deleteProduct} />
					)}
				</div>
			</div>
		</div>
	);
};

export default AdminProduct;

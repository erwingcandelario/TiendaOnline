import React, { useCallback, useEffect, useState } from 'react';
import AddProductForm from '../../components/form/AddProductForm';
import EditProductForm from '../../components/form/EditProductForm';
import Loader from '../../components/loader/Loader';
import ProductTable from '../../components/table/ProductTable';
import UseLoader from '../../hook/UseLoader';
import { delProduct, getList } from '../../services/productListService';
const AdminProduct = () => {
	const [loading, setLoading] = UseLoader(false);
	const [state, setState] = useState();
	const fetchData = useCallback(async () => {
		const data = await getList();
		setState(data);
	}, []);

	useEffect(() => {
		setLoading(true);
		fetchData();
		state?.products.length > 0 ? setLoading(false) : setLoading(true);
	}, [fetchData, setLoading, state?.products.length]);

	const productData = state?.products;

	const initialFormState = {
		id: null,
		name: '',
		company: '',
		price: '',
		description: '',
		urlImage: '',
		largeDescription: '',
	};

	const [products, setProducts] = useState(productData);
	const [editing, setEditing] = useState(false);
	const [currentProduct, setCurrentProduct] = useState(initialFormState);

	const addProduct = (product) => {
		productData.push(product);
		setProducts(productData);
	};

	const editRow = (product) => {
		setEditing(true);
		setCurrentProduct({
			id: product.id,
			name: product.name,
			company: product.company,
			price: product.price,
			description: product.description,
			urlImage: product.urlImage,
			largeDescription: product.largeDescription,
			score: product.score,
		});
	};

	const deleteProduct = (id) => {
		setEditing(false);
		const delfetchData = async () => {
			let data = await delProduct(id);
			if (data) {
				fetchData();
			}
		};

		delfetchData();
	};

	const updateProduct = (data) => {
		setEditing(false);
		if (data) {
			fetchData();
		}
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
						<ProductTable products={productData} editRow={editRow} deleteProduct={deleteProduct} />
					)}
				</div>
			</div>
		</div>
	);
};

export default AdminProduct;

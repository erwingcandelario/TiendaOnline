import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../../components/productList/ProductList';
import UseLoader from '../../hook/UseLoader';
import { getList } from '../../services/productListService';
const SearchPage = () => {
	const [loading, setLoading] = UseLoader(false);
	const { searchTerm } = useParams();
	const [state, setState] = useState();

	const fetchData = useCallback(async () => {
		const data = await getList(searchTerm);
		setState(data);
	}, []);
	useEffect(() => {
		setLoading(true);
		fetchData();
		state?.products.length > 0 ? setLoading(false) : setLoading(true);
	}, [fetchData, setLoading, state?.products.length]);

	const searchProducts = state?.products;

	if (searchProducts?.length === 0) {
		return (
			<div
				className="container"
				style={{
					minHeight: '70vh',
				}}
			>
				<div className="fw-5 text-danger py-5">
					<h3>Producto no encontrado.</h3>
				</div>
			</div>
		);
	}

	return (
		<main>
			<div className="search-content bg-whitesmoke">
				<div className="container">
					<div className="py-5">
						<div className="title-md">
							<h3>Resultados de la búsqueda: {searchTerm.toLocaleUpperCase()}</h3>
						</div>
						<br />
						<ProductList products={searchProducts} />
					</div>
				</div>
			</div>
		</main>
	);
};

export default SearchPage;

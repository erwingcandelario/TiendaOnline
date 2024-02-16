import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../../components/productList/ProductList';
import { getList } from '../../services/productListService';

const SearchPage = () => {
	const { searchTerm } = useParams();
	useEffect(() => {}, [searchTerm]);
	const searchProducts = getList.filter(
		(item) => item.empresa.toLocaleLowerCase().trim() === searchTerm.toLocaleLowerCase().trim()
	);
	if (searchProducts.length === 0) {
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

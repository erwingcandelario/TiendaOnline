import React, { useEffect, useState } from 'react';
import Loader from '../../components/loader/Loader';
import ProductList from '../../components/productList/ProductList';
import Sidebar from '../../components/slider/Slider';
import { getAllProducts } from '../../services/productListService';
import './Home.css';
const HomePage = () => {
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		getAllProducts.length > 0 ? setLoading(false) : setLoading(true);
	}, []);
	return (
		<div className="container my-2">
			<main>
				<Sidebar />
				<div className="container p-2">
					<div className="home-title-md">
						<h3>Ver nuestros productos</h3>
					</div>
					{loading ? <Loader /> : <ProductList products={getAllProducts} />}
				</div>
			</main>
		</div>
	);
};

export default HomePage;

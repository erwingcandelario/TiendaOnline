import React, { useEffect } from 'react';
import Loader from '../../components/loader/Loader';
import ProductList from '../../components/productList/ProductList';
import Sidebar from '../../components/slider/Slider';
import UseLoader from '../../hook/UseLoader';
import { getAllProducts } from '../../services/productListService';
import './Home.css';
const HomePage = () => {
	const [loading, setLoading] = UseLoader(false);
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			getAllProducts.length > 0 ? setLoading(false) : setLoading(true);
		}, 1000);
	}, [setLoading]);

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

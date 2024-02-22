/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';
import { LeftSideBar } from '../../components/leftSideBar/LeftSideBar';
import Loader from '../../components/loader/Loader';
import ProductList from '../../components/productList/ProductList';
import Sidebar from '../../components/slider/Slider';
import UseLoader from '../../hook/UseLoader';
import { getList, searchServiceProduct } from '../../services/productListService';
import './Home.css';
const HomePage = () => {
	const [loading, setLoading] = UseLoader(false);
	const [state, setState] = useState();
	const [aggs, setAggs] = useState();
	const [aggsResult, setAggsResult] = useState();

	const fetchData = useCallback(async () => {
		const data = await getList();
		setState(data);
	}, []);

	const fetchAggsData = useCallback(async () => {
		const data = await getList('', '', '', '', '', '', '', true);
		setAggs(data);
	}, []);

	const fetchSearchData = useCallback(async (url) => {
		const data = await searchServiceProduct(url);
		setAggsResult(data);
	}, []);

	useEffect(() => {
		setLoading(true);
		fetchData();
		fetchAggsData();
		state?.products?.length > 0 ? setLoading(false) : setLoading(true);
		aggs?.aggs.length > 0 ? setLoading(false) : setLoading(true);
	}, [
		fetchData,
		fetchAggsData,
		fetchSearchData,
		setLoading,
		state?.products?.length,
		aggs?.aggs?.length,
		aggsResult?.products.length,
	]);

	const prueba = aggsResult?.products;

	const searchProduct = (data) => {
		if (data?.uri !== '') {
			fetchSearchData(data?.uri);
		}
	};

	return (
		<div className="container my-2">
			<main>
				<Sidebar />
				<div className="container p-2">
					<div className="home-title-md">
						<h3>Ver nuestros productos</h3>
					</div>
					<div className="container">
						<div className="row">
							<div className="col-3">
								<LeftSideBar products={aggs?.aggs} searchProduct={searchProduct} />
							</div>
							<div className="col-9">
								{loading ? (
									<Loader />
								) : (
									<ProductList
										products={prueba?.length > 0 ? aggsResult?.products : state?.products}
									/>
								)}
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default HomePage;

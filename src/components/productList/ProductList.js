import React from 'react';
import Product from '../product/Product';

const ProductList = ({ products }) => {
	return (
		<div className="container d-flex flex-wrap align-items-center">
			{products.map((product) => {
				return <Product key={product.id} product={{ ...product }} />;
			})}
		</div>
	);
};

export default ProductList;

import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {
	return (
		<Link to={`/product/${product?.id}`} key={product?.id} className="product-link p-2">
			<div className="card card_product">
				<div className="product-img">
					<img
						className="card-img-top product-img-cover"
						src={product?.imagen}
						alt={product.nombre}
					/>
				</div>
				<div className="card-body">
					<h5 className="card-title">{product?.empresa}</h5>
					<h6 className="card-text">{product?.nombre}</h6>
					<p className="card-text">{product?.descripcionCorta}</p>
				</div>
			</div>
		</Link>
	);
};

export default Product;

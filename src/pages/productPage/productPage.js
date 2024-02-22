import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Modal from '../../components/modal/Modal';
import { product } from '../../services/productListService';

const ProductSinglePage = () => {
	const { id } = useParams();
	const [modalShow, setModalShow] = useState(false);
	const [state, setState] = useState();

	const fetchData = useCallback(async (id) => {
		const data = await product(id);
		setState(data);
	});

	useEffect(() => {
		fetchData(id);
	}, []);

	console.log('state Ultimo', state);
	const productModel = state;
	return (
		<div className="container my-2">
			<main>
				<div className="container p-2">
					<div className="container-fluid" id="about">
						<div className="row">
							<div className="col-md-6">
								<img
									className="img-responsive productSingle_img ms-5"
									src={productModel?.urlImage}
									alt={productModel?.name}
								/>
							</div>
							<div className="col-md-6">
								<form>
									<legend>{productModel?.name}</legend>
									<div className="mb-3">
										<label className="form-label">Empresa {productModel?.company}</label>
									</div>
									<div className="mb-3">
										<label className="form-label"> valor {productModel?.price} </label>
									</div>
									<div className="mb-3 form-check">
										<p> {productModel?.largeDescription}</p>
									</div>
									<button
										type="button"
										className="btn btn-primary"
										onClick={() => setModalShow(true)}
									>
										Comprar
									</button>
									<Modal show={modalShow} onHide={() => setModalShow(false)} />
								</form>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};
export default ProductSinglePage;

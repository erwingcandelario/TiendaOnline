import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Modal from '../../components/modal/Modal';
import { getAllProducts } from '../../services/productListService';
const ProductSinglePage = () => {
	const { id } = useParams();
	const [modalShow, setModalShow] = useState(false);

	const product = getAllProducts.filter((item) => item.id === Number(id))[0];
	return (
		<div className="container my-2">
			<main>
				<div className="container p-2">
					<div className="container-fluid" id="about">
						<div className="row">
							<div className="col-md-6">
								<img
									className="img-responsive productSingle_img ms-5"
									src={product.imagen}
									alt={product.nombre}
								/>
							</div>
							<div className="col-md-6">
								<form>
									<legend>{product.nombre}</legend>
									<div className="mb-3">
										<label className="form-label">Empresa {product.empresa}</label>
									</div>
									<div className="mb-3">
										<label className="form-label"> valor {product.precio} </label>
									</div>
									<div className="mb-3 form-check">
										<p> {product.descripcionLarga}</p>
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

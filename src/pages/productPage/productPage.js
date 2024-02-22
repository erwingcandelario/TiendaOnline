// ProductSinglePage.js
import React, { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Modal from '../../components/modal/Modal';
import { product, saveProduct } from '../../services/productListService';

const ProductSinglePage = () => {
    const { id } = useParams();
    const [modalShow, setModalShow] = useState(false);
    const [state, setState] = useState();
    const [showMessage, setShowMessage] = useState(false); // Estado para controlar el mensaje de compra realizada
    const [showBuyButton, setShowBuyButton] = useState(true); // Estado para controlar la visibilidad del botón de compra

    const fetchData = useCallback(async (id) => {
        const data = await product(id);
        setState(data);
    }, []);

    useEffect(() => {
        fetchData(id);
    }, []);

    const handleSubmit = async (event) => {
        try {
            const response = await saveProduct(productModel?.id); 
            console.log('Producto guardado:', response);
            setShowBuyButton(false); // Ocultar el botón de compra después de realizar la compra
            setShowMessage(true); // Mostrar el mensaje de compra realizada
        } catch (error) {
            console.error('Error al guardar el producto:', error);
        }
    };

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
                               {showBuyButton && (
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={() => setModalShow(true)}
                                    >
                                        Comprar
                                    </button>
                                )}
                                
                                <Modal show={modalShow} onHide={() => setModalShow(false)} onSave={handleSubmit} showMessage={setShowMessage} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
           
            {showMessage && (
                <div className="alert alert-success" role="alert">
                    Compra realizada con éxito.
                </div>
            )}
            
            <Link to="/">
                <button className="btn btn-primary">Volver al inicio</button>
            </Link>
        </div>
    );
};

export default ProductSinglePage;

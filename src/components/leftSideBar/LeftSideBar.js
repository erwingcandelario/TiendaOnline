import React from "react";
import "./leftSideBar.css";
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';

export const LeftSideBar = ({ products }) => {
     console.log(products);

    //  if (products === undefined) {
    //     return <div>Loading...</div>;
    //   }
      
    //  const productsByCompany = products.reduce((acc, product) => {
    //     acc[product.company] = (acc[product.company] || 0) + 1;
    //     return acc;
    //   }, {});

  return (
    <div className="card left-side-bar">
      <div className="card-body">
        <h5 className="card-title">Marca</h5>
      </div>
      {/* <ul className="list-group list-group-flush" >
        {Object.keys(productsByCompany).map((company) => (
            <li key={company} className="list-group-item" >
                <Link className="link-item" to={`/products/${company}`} >{company} ({productsByCompany[company]}) </Link>
            </li>
        ))}
      </ul> */}
      {/* <ul className="list-group list-group-flush">
        {products?.lenght > 0 ? (
          products.map((product) => (
            <li className="list-group-item"> <Link className="link-item" to="/products" >{product?.company} </Link></li>
          ))
        ) : (
          <span>No hay marcas relacionadas</span>
        )}
      </ul> */}
      <ul className="list-group list-group-flush">
        <li className="list-group-item"> <Link className="link-item" to ="/products/samsung" >Samsung</Link> (3)  </li>
        <li className="list-group-item"> <Link className="link-item" to ="/products/xiaomi" >Xiaomi</Link> (4) </li>
        <li className="list-group-item"> <Link className="link-item" to ="/products/apple" >Apple</Link> (1) </li>
      </ul>
    </div>
  );
};

// LeftSideBar.propTypes = {
//     company: PropTypes.string.isRequired
// };
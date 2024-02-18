import React from "react";
import "./leftSideBar.css";
import { Link } from "react-router-dom";

export const LeftSideBar = (props) => {
  return (
    <div className="card left-side-bar">
      <div className="card-body">
        <h5 className="card-title">Marca</h5>
      </div>
      {/* <ul className="list-group list-group-flush">
        {props?.products?.lenght > 0 ? (
          props.products.map((product) => (
            <li className="list-group-item"> <Link className="link-item" to="/products" >{product?.company} <Link/></li>
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

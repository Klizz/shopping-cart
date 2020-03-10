import React from "react";
import AddToCart from './AddToCart';

const Product = (props) => (
  <div className="col s4">
    <div className="card">
    <div className="card-image">
    <img className="card-img-top" src={props.info.image} alt="not found"/>
    <span className="card-title"> <h2 className="black-text">{props.info.name}</h2> </span>
    </div>
    <div className="card-content">
      <h5 className="text-info teal-text">Precio: ${props.info.price} </h5>
      <p>Descripción: {props.info.description} </p>
      <div className="card-action">
      < AddToCart />
      </div>
    </div>
  </div>
  </div>

);


export default Product;
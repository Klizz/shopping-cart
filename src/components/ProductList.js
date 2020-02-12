import React from "react";

const Product = props => (
  <div className="card">
    <div className="card-body">
      <h2 className="text-success">{props.info.name}</h2>
      <p className="text-info">Precio: ${props.info.price} </p>
      <p>Descripcion: {props.info.description} </p>
    </div>
  </div>
);

export default Product;
import React from "react";
import Product from "./ProductList.js";

const ShoppingCart = props => {

  const prod = props.items.map(items => (
    <Product info={items} key={items.id} />
  ));

  if (prod.length > 0) {
    return <div>{prod}</div>;
  } else {
    return (
      <div>
        <h1>No hay nada en tu carrito :( </h1>
      </div>
    );
  }
};

export default ShoppingCart;

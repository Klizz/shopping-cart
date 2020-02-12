import React from "react";
import products from "./Products.js";
import Product from "./ProductList.js";

const ShoppingCart = () => {
  const prod = products.map((products, idx) => (
    <Product info={products} key={idx} />
  ));

  if (prod.length > 0) {
      return(
        <div className="container">
            {prod}
        </div>
      )
  } else {
      return (
          <div className="container">
              <h1>No hay nada en tu carrito :( </h1>
          </div>
      );
  }
};

export default ShoppingCart;

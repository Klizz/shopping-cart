import React, { Component } from "react";
import Product from "./ProductList.js";

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      products: Product
    };
  }

  render() {
    
    const prod = this.props.items.map(items => (
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
  }
}

export default ShoppingCart;

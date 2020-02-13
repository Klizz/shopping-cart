import React from "react";
import ShoppingCart from "./components/ShoppingCart";
import products from "./components/Products";
import "./style.css";

const cartItems = [
  products[0],
  products[1],
  products[2],
  products[3],
  products[4],
  products[5]
];

const total = cartItems.reduce(function(x, y) {
  return x + y.price;
}, 0)
console.log(total);

const App = () => (

  <div className="container">
    <h1 className="center-align light-green-text lighten-3">Carrito de compras</h1>
  <div className="row">
    <ShoppingCart items={cartItems} />
      <div className="col s12 light-green lighten-3 total-box">
        <p>En total tienes {cartItems.length} objetos en tu carrito</p>
        <p>El precio total de los articulos es de ${total} pesos</p>
      </div>
    </div>
  </div>
);

export default App;

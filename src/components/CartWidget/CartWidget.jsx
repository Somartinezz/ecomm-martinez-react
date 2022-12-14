import React from "react";
import { CartContext } from "../CartContext/CartContext";
import { useContext } from "react";
import "./CartWidget.css";
import Badge from 'react-bootstrap/Badge';


const Carrito = () => {
  const ctx = useContext(CartContext);

  return (
    <>
      <div className="cartWidget">
        <img className="img-cart- rounded-circle" src="https://img.icons8.com/laces/64/000000/shopping-cart.png" alt="imagen" />
        <Badge className="badge- bg-- rounded-circle bg-warning">
          {ctx.calcItemsQty()}</Badge>
      </div>
    </>
  );
};

export default Carrito;

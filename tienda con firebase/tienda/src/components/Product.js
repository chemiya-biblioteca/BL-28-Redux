import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-clice";

import "./Product.css";
const Product = ({ name, id, imgURL, price }) => {//reicbo los datos del producto
  const dispatch = useDispatch();//para llamar los metodos
  const addToCart = () => {
    dispatch(//llamo al slice para que lo añada
      cartActions.addToCart({
        name,
        id,
        price,
      })
    );
  };
  return (
    <div className="card">
      <img src={imgURL} alt={name} />{/**enlazo con las variables */}
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={addToCart}>Add to cart</button>{/**manejo el evento */}
    </div>
  );
};

export default Product;

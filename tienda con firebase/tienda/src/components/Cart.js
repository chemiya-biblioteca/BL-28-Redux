import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-clice";
import "./Cart.css";
const Cart = () => {
  const quantity = useSelector((state) => state.cart.totalQuantity);//busco cuantos elementos hay
  const dispatch = useDispatch();//para llamar los metodos
  const showCart = () => {
    dispatch(cartActions.setShowCart());//en el metodo, llamo al dispatch para que muestre la carta
  };
  return (
    <div className="cartIcon">
      <h3 onClick={showCart}>Cart: {quantity} Items</h3>{/**manejo el evnto y muestro la variable */}
    </div>
  );
};

export default Cart;

import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-clice";
import "./Cart.css";
const CartItem = ({ name, quantity, total, price, id }) => {//recibo parametros
  const dispatch = useDispatch();//para coger las funciones
  const incrementCartItem = () => {//llamo al slice y que lo guarde en el carro
    dispatch(
      cartActions.addToCart({
        name,
        id,
        price,
      })
    );
  };
  const decrementCartItems = () => {
    dispatch(cartActions.removeFromCart(id));//llamo al slice y que lo elimine
  };
  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>{/**enlazo con los dartos que recibo */}
      <button onClick={decrementCartItems} className="cart-actions">{/**manejo loso eventos */}
        -
      </button>
      <button onClick={incrementCartItem} className="cart-actions">
        +
      </button>
    </div>
  );
};

export default CartItem;

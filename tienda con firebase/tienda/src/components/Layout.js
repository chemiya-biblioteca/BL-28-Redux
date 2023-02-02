import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
const Layout = () => {
  let total = 0;
  const itemsList = useSelector((state) => state.cart.itemsList);//traigo la lista de elementos

  itemsList.forEach((item) => {
    total += item.totalPrice;
  });///acumulo el precio total
  const showCart = useSelector((state) => state.cart.showCart);//para si se muestra

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />{/**llamo componente con los elementos */}
        {showCart && <CartItems />}{/**si se muestra y hay elementos */}
        <div className="total-price">
          <h3>Total: ${total}</h3>{/**pongo el total */}
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;

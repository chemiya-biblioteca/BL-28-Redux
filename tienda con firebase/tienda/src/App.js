import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import { fetchData, sendCartData } from "./store/cart-actions";
import { uiActions } from "./store/ui-slice";
let isFirstRender = true;
function App() {
  const dispatch = useDispatch();//para las funciones de redux
  const notification = useSelector((state) => state.ui.notification);//cogemos la notificacion
  const cart = useSelector((state) => state.cart);//cogemos la carta
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);//cogemos logeado

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);//al cambiar dispatch, cargamos los datos
  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);
  return (
    <div className="App">
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;

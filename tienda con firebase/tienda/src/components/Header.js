import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";
import Cart from "./Cart";
import "./Header.css";
const Header = () => {
  const dispatch = useDispatch();//para llamar los metodos
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };//llamo al slice de identificarse
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Redux Shopping App
            </h2>
          </li>
          <li>
            <Cart />
          </li>{/**componente de carga */}
          <li>
            <button onClick={logoutHandler} className="logout-btn">{/**manejo el evento */}
              Logout
            </button>{" "}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import React from "react";
import { Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui-slice";
const Notification = ({ type, message }) => {//recibo mensaje y tipo
  const dispatch = useDispatch();//para llamar a las funciones
  const notification = useSelector((state) => state.ui.notification);//la notificacion
  const handleClose = () => {
    dispatch(
      uiActions.showNotification({//le digo que la oculte
        open: false,
      })
    );
  };
  return (
    <div>{/**si se tiene que mostrar, al cerrar llamo evento  colo segun tipo */}
      {notification.open && (
        <Alert onClose={handleClose} severity={type}>
          {message}
        </Alert>
      )}
    </div>
  );
};

export default Notification;

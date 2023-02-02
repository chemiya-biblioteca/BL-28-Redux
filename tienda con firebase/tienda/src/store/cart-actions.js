import { cartActions } from "./cart-clice";
import { uiActions } from "./ui-slice";

export const fetchData = () => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      const res = await fetch(
        "https://redux-crud-a7008-default-rtdb.firebaseio.com/cartItems.json"
      );//consultamos la base de datos
      const data = await res.json();//a json y lo devolvemos
      return data;
    };
    try {
      const cartData = await fetchHandler();//llamamos la funcion para carga datos
      console.log(cartData);
      dispatch(cartActions.replaceData(cartData));//reemplazamos los datos que obtenemos por los que tenemos guardados
    } catch (err) {
      dispatch(//llamamos para mostrar notificadion
        uiActions.showNotification({
          open: true,
          message: "Sending Request Failed",
          type: "error",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(//llammamos para mostrar notificacion
      uiActions.showNotification({
        open: true,
        message: "Sending Request To Database!",
        type: "warning",
      })
    );
    const sendRequest = async () => {
      // Send state as Sending request

      const res = await fetch(
        "https://redux-crud-a7008-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }//a la base de datos le decimos que ,o guarde y le pasamos los datos
      );
      const data = await res.json();
      // Send state as Request is successful
      dispatch(//llamamos para mostra notificaicon
        uiActions.showNotification({
          open: true,
          message: "Request Sent Successfully!!",
          type: "success",
        })
      );
    };
    try {
      await sendRequest();//lllammos la funcion
    } catch (err) {
      dispatch(//Notificacion con error
        uiActions.showNotification({
          open: true,
          message: "Sending Request Failed",
          type: "error",
        })
      );
    }
  };
};

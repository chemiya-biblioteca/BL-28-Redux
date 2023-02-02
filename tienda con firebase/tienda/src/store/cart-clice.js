import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
  name: "cart",//slice
  initialState: {//inicial
    itemsList: [],
    totalQuantity: 0,
    showCart: false,
    changed: false,
  },
  reducers: {//modificadores
    replaceData(state, action) {
      state.totalQuantity = action.payload.totalQuantity;//guardamos del payload
      state.itemsList = action.payload.itemsList;
    },
    addToCart(state, action) {
      state.changed = true;
      const newItem = action.payload;//guardamos del payload
      // miramos si el elemento ya esta
      const existingItem = state.itemsList.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {//si esta, incrementamos cantidad y precio
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });//si no lo guardamos en la lista
        state.totalQuantity++;
      }
    },
    removeFromCart(state, action) {
      state.changed = true;
      const id = action.payload;//cogemos el id del payload

      const existingItem = state.itemsList.find((item) => item.id === id);//buscamos en la lista del mismo id
      if (existingItem.quantity === 1) {
        state.itemsList = state.itemsList.filter((item) => item.id !== id);
        state.totalQuantity--;//si esta, disminuimos cantidad y quitamos de la lista
      } else {
        existingItem.quantity--;// sino disminuimos cantidad y precio
        existingItem.totalPrice -= existingItem.price;
      }
    },
    setShowCart(state) {
      state.showCart = !state.showCart;//cambiamos el valor
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;

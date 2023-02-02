import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",//slice
  initialState: { notification: null },//con su inicial
  reducers: {//modificadores
    showNotification(state, action) {
      state.notification = {
        message: action.payload.message,//cojo del payload lo que me llega
        type: action.payload.type,
        open: action.payload.open,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;

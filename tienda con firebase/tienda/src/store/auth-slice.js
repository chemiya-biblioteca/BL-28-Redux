import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",//slice
  initialState: { isLoggedIn: false },//inicial
  reducers: {
    login(state) {//modificadores
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;

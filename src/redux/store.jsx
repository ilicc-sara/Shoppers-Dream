import { configureStore } from "@reduxjs/toolkit";
import viewReducer from "./slice";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: { view: viewReducer, cart: cartReducer },
});

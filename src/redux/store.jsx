import { configureStore } from "@reduxjs/toolkit";
import viewReducer from "./slice";
import cartReducer from "./cartSlice";
import loadingReducer from "./loadingSlice";

export const store = configureStore({
  reducer: { view: viewReducer, cart: cartReducer, loading: loadingReducer },
});

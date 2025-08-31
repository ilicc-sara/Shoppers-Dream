import { configureStore } from "@reduxjs/toolkit";
import viewReducer from "./slice";

export const store = configureStore({
  reducer: { view: viewReducer },
});

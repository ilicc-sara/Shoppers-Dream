import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const initialState = [];

// export const priceSum = createSelector([(state) => state.cart], (cart) => {
//   return cart
//     .reduce((acc, cur) => {
//       return acc + cur.unitPrice * cur.quantity;
//     }, 0)
//     .toFixed(2);
// });

// export const amountSum = createSelector([(state) => state.cart], (cart) => {
//   return cart.reduce((acc, cur) => {
//     return acc + cur.quantity;
//   }, 0);
// });

// export const cartIsEmpty = createSelector([(state) => state.cart], (cart) => {
//   return cart.length === 0;
// });

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {},
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const initialState = [];

export const priceSum = createSelector([(state) => state.cart], (cart) => {
  return cart
    .reduce((acc, cur) => {
      return acc + cur.unitPrice * cur.quantity;
    }, 0)
    .toFixed(2);
});

export const amountSum = createSelector([(state) => state.cart], (cart) => {
  return cart.reduce((acc, cur) => {
    return acc + cur.quantity;
  }, 0);
});

export const cartIsEmpty = createSelector([(state) => state.cart], (cart) => {
  return cart.length === 0;
});

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (
        state.includes(
          state.find(
            (product) =>
              product.id === action.payload.id &&
              product.color === action.payload.color
            //  && product.quantity !== product.productsAvailable
          )
        )
      ) {
        const index = state.findIndex((item) => item.id === action.payload.id);
        state[index].quantity += 1;
        state[index].totalPrice = (
          state[index].quantity * state[index].unitPrice
        ).toFixed(2);
      } else {
        state.push({
          image: action.payload.image,
          name: action.payload.name,
          id: action.payload.id,
          quantity: action.payload.quantity,
          unitPrice: action.payload.price,
          totalPrice: (action.payload.price * action.payload.quantity).toFixed(
            2
          ),
          productsAvailable: action.payload.productsAvailable,
          color: action.payload.color,
          shipping: action.payload.shipping,
        });
      }
    },
    increaseAmount: (state, action) => {
      const index = state.findIndex(
        (item) =>
          item.id === action.payload.id && item.color === action.payload.color
      );
      if (state[index].quantity !== state[index].productsAvailable) {
        state[index].quantity += 1;
        state[index].totalPrice = (
          state[index].quantity * state[index].unitPrice
        ).toFixed(2);
      } else return;
    },
    decreaseAmount: (state, action) => {
      const index = state.findIndex(
        (item) =>
          item.id === action.payload.id && item.color === action.payload.color
      );
      if (state[index].quantity !== 1) {
        state[index].quantity -= 1;
        state[index].totalPrice = (
          state[index].quantity * state[index].unitPrice
        ).toFixed(2);
      } else return;
    },
    deleteCartItem: (state, action) => {
      return (state = state.filter(
        (item) =>
          item.id !== action.payload.id && item.color !== action.payload.color
      ));
    },
    clearCart: (state) => {
      return (state = []);
    },
  },
});

export const {
  addToCart,
  increaseAmount,
  decreaseAmount,
  deleteCartItem,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

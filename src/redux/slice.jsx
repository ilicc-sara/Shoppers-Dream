import { createSlice } from "@reduxjs/toolkit";

const initialState = { isInView: true };

const viewSlice = createSlice({
  name: "isInView",
  initialState,
  reducers: {
    setView: (state, action) => {
      state.isInView = action.payload.isInView;
    },
  },
});

export const { setView } = viewSlice.actions;

export default viewSlice.reducer;

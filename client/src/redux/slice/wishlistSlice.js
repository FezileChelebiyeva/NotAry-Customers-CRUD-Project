import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const wishlistSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addCustomer: (state, action) => {
      state.data.push(action.payload);
    },
    removeCustomer: (state, action) => {
      state.data = state.data.filter((elem) => elem._id !== action.payload);
    },
  },
});

export const { addCustomer, removeCustomer } = wishlistSlice.actions;

export default wishlistSlice.reducer;

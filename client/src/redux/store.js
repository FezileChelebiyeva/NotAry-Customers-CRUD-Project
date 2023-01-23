import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slice/dataSlice";
import wishlistReducer from "./slice/wishlistSlice";

export const store = configureStore({
  reducer: {
    customers: dataReducer,
    customer: wishlistReducer,
  },
});

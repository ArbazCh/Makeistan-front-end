import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/product";
import cartReducer from "./slices/cart";

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/product";
import cartReducer from "./slices/cart";
// import allProductSliceReducer from "./slices/allproducts";
import dataSlice from "./slices/allproducts"

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    // allProducts : allProductSliceReducer,
    data : dataSlice
  },
});

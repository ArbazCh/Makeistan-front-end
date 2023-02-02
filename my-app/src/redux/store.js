import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/product";
import cartReducer from "./slices/cart";
import allProductSliceReducer from "./slices/allproducts";
import userSliceReducer from "./slices/user";

export const store = configureStore({
  reducer: combineReducers({
    product: productReducer,
    cart: cartReducer,
    allProducts: allProductSliceReducer,
    user: userSliceReducer,
  }),
});

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/product";
import cartReducer from "./slices/cart";
import allProductSliceReducer from "./slices/allproducts";
import authSliceReducer from "./slices/auth";
import ordertSliceReducer from "./slices/order";

export const store = configureStore({
  reducer: combineReducers({
    product: productReducer,
    cart: cartReducer,
    order: ordertSliceReducer,
    allProducts: allProductSliceReducer,
    auth: authSliceReducer,
  }),
});

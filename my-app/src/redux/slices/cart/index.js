// eslint-disable-next-line
import { createSlice, current } from "@reduxjs/toolkit";
import { fetchFromLocalStorage, storeInLocalStorage } from "../../../helpers";

const initialState = {
  cartItems: fetchFromLocalStorage(),
  totalItems: 0,
  totalAmount: 0,
  deliveryCharge: 1000,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const tempItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (tempItem) {
        const tempCart = state.cartItems.map((item) => {
          if (item.id === action.payload.id) {
            let newQty = item.quantity + action.payload.quantity;
            let newTotalPrice = newQty * item.price;
            return { ...item, quantity: newQty, totalPrice: newTotalPrice };
          } else {
            return item;
          }
        });
        state.cartItems = tempCart;
        storeInLocalStorage(state.cartItems);
      } else {
        state.cartItems.push(action.payload);
        storeInLocalStorage(state.cartItems);
      }
    },
    removeFromCart(state, action) {
      const tempCart = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = tempCart;
      storeInLocalStorage(state.cartItems);
    },
    toggleCartQty(state, action) {
      const tempCart = state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          let tempQty = item.quantity;
          let tempTotalPrice = item.totalPrice;
          if (action.payload.type === "INC") {
            tempQty++;
            tempTotalPrice = tempQty * item.price;
          }
          if (action.payload.type === "DEC") {
            tempQty--;
            if (tempQty < 1) tempQty = 1;
            tempTotalPrice = tempQty * item.price;
          }
          return { ...item, quantity: tempQty, totalPrice: tempTotalPrice };
        } else {
          return item;
        }
      });
      state.cartItems = tempCart;
      storeInLocalStorage(state.cartItems);
    },

    clearCart(state, action) {
      state.cartItems = [];
      storeInLocalStorage(state.cartItems);
    },
    getCartTotal(state) {
      state.totalAmount = state.cartItems.reduce((cartTotal, cartItem) => {
        return (cartTotal += cartItem.totalPrice);
      }, 0);
      state.totalItems = state.cartItems.length;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  toggleCartQty,
  getCartTotal,
} = cartSlice.actions;
export default cartSlice.reducer;

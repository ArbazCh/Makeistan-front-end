// eslint-disable-next-line
import { toast } from "react-toastify";
// eslint-disable-next-line
import { createSlice, current } from "@reduxjs/toolkit";
import {
  fetchFromLocalStorage,
  storeInLocalStorage,
} from "../../../helpers/localStorage";

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
        (item) => item.productId === action.payload.productId
      );
      if (tempItem) {
        const tempCart = state.cartItems.map((item) => {
          console.log("Itemd: ", current(item));
          if (item.productId === action.payload.productId) {
            let newQty = item.quantity + action.payload.quantity;
            let newTotalPrice = newQty * item.unitPrice;
            return { ...item, quantity: newQty, totalPrice: newTotalPrice };
          } else {
            return item;
          }
        });
        state.cartItems = tempCart;
        storeInLocalStorage(state.cartItems);

        toast.info(`Increased product quantity`, {
          position: "bottom-left",
        });
      } else {
        state.cartItems.push(action.payload);
        storeInLocalStorage(state.cartItems);

        toast.success("Product Added to Cart", {
          position: "bottom-left",
        });
      }
    },
    removeFromCart(state, action) {
      const tempCart = state.cartItems.filter(
        (item) => item.productId !== action.payload.productId
      );
      state.cartItems = tempCart;
      storeInLocalStorage(state.cartItems);

      toast.success("Product Removed from Cart", {
        position: "bottom-left",
      });
    },
    toggleCartQty(state, action) {
      const tempCart = state.cartItems.map((item) => {
        if (item.id === action.payload.productId) {
          let tempQty = item.quantity;
          let tempTotalPrice = item.totalPrice;
          if (action.payload.type === "INC") {
            tempQty++;
            tempTotalPrice = tempQty * item.unitPrice;
          }
          if (action.payload.type === "DEC") {
            tempQty--;
            if (tempQty < 1) tempQty = 1;
            tempTotalPrice = tempQty * item.unitPrice;
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

      toast.success("Cart Cleared ", {
        position: "bottom-left",
      });
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

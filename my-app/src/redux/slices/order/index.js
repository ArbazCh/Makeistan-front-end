import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { postOrder } from "./thunk";
import { useNavigate } from "react-router-dom";

const initialState = {
  order: false,
  error: null,
  loading: false,
};

export const ordertSlice = createSlice({
  name: "order",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(postOrder.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(postOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = state.error.message;
        toast.success("Something went wrong. Please try again later", {
          position: "top-center",
        });
      })
      .addCase(postOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.order = true;
        toast.success("Your order has been placed. Thank you for Shoping.", {
          position: "top-center",
        });
        localStorage.removeItem("cart");
      });
  },
});

export default ordertSlice.reducer;

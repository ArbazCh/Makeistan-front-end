import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { postOrder } from "./thunk";

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
        const { status, message } = action.payload;
        // console.log("status rejected: ", status);
        state.loading = false;
        state.error = message;
        toast.error(`Status: ${status} Error: ${message}`, {
          position: "top-center",
        });
      })
      .addCase(postOrder.fulfilled, (state, action) => {
        const { status, message } = action.payload;
        // console.log("action: ", action.payload);
        state.loading = false;

        if (status === 200) {
          toast.success(`${message}`, {
            position: "top-center",
          });
          state.order = true;
          localStorage.removeItem("cart");
          // console.log("state: ", state.order);
        } else if (status === 401) {
          toast.error(`Error ${message}`, {
            position: "top-center",
          });
          state.order = false;
          localStorage.removeItem("token");
        } else if (status === 400) {
          toast.error(`Error ${message}`, {
            position: "top-center",
          });
        } else if (status === 500) {
          toast.error(`${message}`, {
            position: "top-center",
          });
        }
      });
  },
});

export default ordertSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { fetchProduct } from "./thunk";
const initialState = {
  product: {},
  error: null,
  status: "idle",
};
export const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchProduct.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = state.error.message;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.product = action.payload;
      });
  },
});

export default productSlice.reducer;

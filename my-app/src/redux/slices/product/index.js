import { createSlice } from "@reduxjs/toolkit";
import { fetchProduct } from "./thunk";
const initialState = {
  product: {},
  error: null,
  loading: false,
};
export const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchProduct.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = state.error.message;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.product = action.payload;
        state.loading = false;
      });
  },
});

export default productSlice.reducer;

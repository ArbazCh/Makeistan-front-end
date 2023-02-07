import { createSlice } from "@reduxjs/toolkit";
import { fetchAllData } from "./thunk";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const allProductSlice = createSlice({
  name: "allProducts",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllData.pending]: (state) => {
      state.loading = true;
    },
    [fetchAllData.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.loading = false;
    },
    [fetchAllData.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
  },
});

export default allProductSlice.reducer;

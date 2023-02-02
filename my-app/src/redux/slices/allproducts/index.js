import { createSlice } from "@reduxjs/toolkit";
import { fetcAllData } from "./thunk";

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
    [fetcAllData.pending]: (state) => {
      state.loading = true;
    },
    [fetcAllData.fulfilled]: (state, action) => {
      //   console.log("Hello: ", action.payload);
      state.products = action.payload.products;
      state.loading = false;
    },
    [fetcAllData.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
  },
});

export default allProductSlice.reducer;

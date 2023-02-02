import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchAllData from './thunk'

const initialState = {
  products: [],
  searchTerm:'',
  loading: false,
  error: null,
};

// export const fetchData = createAsyncThunk('fetchData', async () => {
//   try {
//     const response = await fetch('https://dummyjson.com/products');
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     return error;
//   }
// });

const allProductSlice = createSlice({
  name: 'allProducts',
  initialState,
  reducers: {
    // setSearchTerm: (state, action) => {
    //   state.searchTerm = action.payload;
    // },
  },
  extraReducers: {
    [fetchAllData.pending]: (state) => {
      state.loading = true;
    },
    [fetchAllData.fulfilled]: (state, action) => {
      state.products = action.payload.products;
      state.loading = false;
    },
    [fetchAllData.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
  },
});

export default  allProductSlice.reducer;










// collaborateb with arbaz=================
// import { createSlice } from "@reduxjs/toolkit";

// export const allProductSlice = createSlice({
//   name: "allProducts",
//   initialState: {
//     data: [],
//   },
//   reducers: {
//     setAllProducts: (state, action) => {
//       state.data = action.payload;
//       // console.log("Here is Payload", action.payload);
//     },
//   },
// });

// export const { setAllProducts } = allProductSlice.actions;
// export default allProductSlice.reducer;

// export const fetchProduct = () => {
//   // console.log("I'm here");
//   return async function fetchProductThunk(dispatch) {
//     const response = await fetch(
//       `https://dummyjson.com/products/1`
//     );
//     // console.log(response);
//     const data = await response.json();
//     dispatch(setAllProducts(data));
//     // console.log(data);
//   };
// };

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

export const fetchData = createAsyncThunk("fetchData/allProducts", async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    // console.log(Aata);
    return data;
  } catch (error) {
    return error;
  }
});

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchData.pending]: (state) => {
      state.loading = true;
    },
    [fetchData.fulfilled]: (state, action) => {
      //   console.log("Hello: ", action.payload);
      state.products = action.payload.products;
      state.loading = false;
    },
    [fetchData.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
  },
});

export default dataSlice.reducer;

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

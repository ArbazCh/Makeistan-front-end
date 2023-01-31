import { createSlice } from "@reduxjs/toolkit";

export const allProductSlice = createSlice({
  name: "allProducts",
  initialState: {
    data: [],
  },
  reducers: {
    setAllProducts: (state, action) => {
      state.data = action.payload;
      // console.log("Here is Payload", action.payload);
    },
  },
});

export const { setAllProducts } = allProductSlice.actions;
export default allProductSlice.reducer;

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

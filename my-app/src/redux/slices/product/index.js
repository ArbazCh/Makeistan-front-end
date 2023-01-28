import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
  },
  reducers: {
    setProduct: (state, action) => {
      state.data = action.payload;
      // console.log("Here is Payload", action.payload);
    },
  },
});

export const { setProduct } = productSlice.actions;
export default productSlice.reducer;

export const fetchProduct = () => {
  // console.log("I'm here");
  return async function fetchProductThunk(dispatch) {
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/products/101`
    );
    // console.log(response);
    const data = await response.json();
    dispatch(setProduct(data));
    // console.log(data);
  };
};

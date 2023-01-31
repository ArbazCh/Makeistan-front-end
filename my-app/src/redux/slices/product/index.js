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

// export const fetchProduct = (id) => async (dispatch) => {
//   const response = await axios.get(
//     `https://api.escuelajs.co/api/v1/products/${id}`
//   );
//   // const data = await response.json();
//   dispatch(setProduct(response));
//   // dispatch(setProduct(data));
// };

// import axios from "axios";
// import getProductService from "../../../services/product.service.js";
// import API from "../../../../src/api/axios.config.js";

// export const fetchProduct = createAsyncThunk(
//   "product/fetchProduct",
//   async (id) => {
//     try {
//       // console.log("API", API.get(`/`));
//       const response = await getProductService(id);
//       return response.data;
//     } catch (error) {
//       console.error(error.message);
//     }
//   }
// );

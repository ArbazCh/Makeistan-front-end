import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProductService } from "../../../services/product.service.js";

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (id) => {
    try {
      const response = await getProductService(id);
      // console.log("rrres: ", response.data[0]);
      return await response.data[0];
    } catch (error) {
      console.error(error.message);
    }
  }
);

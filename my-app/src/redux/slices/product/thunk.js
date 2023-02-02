import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProductService } from "../../../services/product.service.js";

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (id) => {
    try {
      const response = await getProductService(id);
      // await console.log("res: ", response.data);
      return await response.data;
    } catch (error) {
      console.error(error.message);
    }
  }
);

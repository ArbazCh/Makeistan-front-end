import { getAllProductService } from "../../../services/product.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetcAllData = createAsyncThunk(
  "fetchData/allProducts",
  async () => {
    try {
      const response = await getAllProductService();
      const data = await response.data;
      return data;
    } catch (error) {
      return error;
    }
  }
);

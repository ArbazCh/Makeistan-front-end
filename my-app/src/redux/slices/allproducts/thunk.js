import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProductService } from "../../../services/product.service";

export const fetchAllData = createAsyncThunk(
  "fetchData/allProducts",
  async () => {
    try {
      // console.log('first')
      const response = await getAllProductService() ;
      const data = await response.data;
      // console.log("All Products: ", data);
      return data;
    } catch (error) {
      return error;
    }
  }
);

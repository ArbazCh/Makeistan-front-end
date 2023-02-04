import { createAsyncThunk } from "@reduxjs/toolkit";
import postOrderService from "../../../services/order.service";

export const postOrder = createAsyncThunk(
  "order/postOrder",
  async ({ quantity, totalAmount }) => {
    // console.log("Thunk1: ", quantity, "Thunk2: ", totalAmount);
    try {
      const response = await postOrderService(quantity, totalAmount);
      return await response.data;
    } catch (error) {
      console.error(error.message);
    }
  }
);

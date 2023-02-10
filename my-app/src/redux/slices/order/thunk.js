import { createAsyncThunk } from "@reduxjs/toolkit";
import postOrderService from "../../../services/order.service";

export const postOrder = createAsyncThunk(
  "meals/all",
  async ({ quantity, totalAmount }) => {
    const response = await postOrderService(quantity, totalAmount);
    return response.data;
  }
);

// export const postOrder = createAsyncThunk(
//   "order/postOrder",
//   async ({ quantity, totalAmount }) => {
//     try {
//       const response = await postOrderService(quantity, totalAmount);
//       // console.log("res: ", response);
//       return await response.data;
//     } catch (error) {
//       console.error(error.message);
//     }
//   }
// );

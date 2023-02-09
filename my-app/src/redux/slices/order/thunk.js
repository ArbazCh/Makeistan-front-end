import { createAsyncThunk } from "@reduxjs/toolkit";
import postOrderService from "../../../services/order.service";

export const postOrder = createAsyncThunk(
  "meals/all",
  async ({ quantity, totalAmount }, thunkAPI) => {
    const response = await postOrderService(quantity, totalAmount);
    if (!response.data) {
      return thunkAPI.rejectWithValue({
        statusCode: response.status,
        statusMessage: response.message,
      });
    }
    console.log("res: ", response.data);
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

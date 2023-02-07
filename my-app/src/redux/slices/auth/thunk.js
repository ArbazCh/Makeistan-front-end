import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUserService } from "../../../services/user.service";

export const userLogin = createAsyncThunk("login/user", async (data) => {
  try {
    const response = await loginUserService(data);
    // console.log("res: ", response);
    return response.data;
  } catch (error) {
    return console.error(error);
  }
});

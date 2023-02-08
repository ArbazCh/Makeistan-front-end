
import { createAsyncThunk } from "@reduxjs/toolkit";
import {registerUserService} from "../../../services/user.service"


export const userRegister = createAsyncThunk("register/user", async (data) => {
    try {
      const response = await registerUserService(data);
      // console.log("res: ", response);
      return response.data;
    } catch (error) {
      return console.error(error);
    }
  });
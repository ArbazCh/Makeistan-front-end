import { createAsyncThunk } from "@reduxjs/toolkit";
import { userLoginService, userRegisterService } from "../../../services/user.service.";

export const userLogin = createAsyncThunk(
    "user/userLogin",
    async (data) => {
      try {
        const response = await userLoginService(data);
        console.log(response);
        if(response.token){
            localStorage.setItem("token", response.token);
        return await response.data;

      } }
      catch (error) {
        console.error(error.message);
      }
    }
  );

  export const userRegister = createAsyncThunk(
    "user/userRegister",
    async (data) => {
      try {
        const response = await userRegisterService(data);
        return await response.data;
      } catch (error) {
        console.error(error.message);
      }
    }
  );


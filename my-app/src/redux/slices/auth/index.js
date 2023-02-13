import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "./thunk";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

const initialState = {
  user: null,
  token: localStorage.getItem("token") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    removeUser(state, action) {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
      localStorage.removeItem("userName");
      localStorage.removeItem("userAddress")
      toast.info("Logged out successfully");
    },
  },

  extraReducers(builder) {
    builder
      .addCase(userLogin.fulfilled, (state, action) => {
        const { jwtToken, user } = action.payload;
        const { address, firstName } = user[0];
        // console.log("address: ", address, "name: ", firstName);
        state.user = user;
        state.token = jwtToken;
        localStorage.setItem("token", state.token);
        localStorage.setItem("userName", firstName);
        localStorage.setItem("userAddress", address);
        toast.success("Login Successful");
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.user = null;
        state.token = null;
        localStorage.removeItem("token");
        toast.error("Invalid Credential");
      });
  },
});
export const { removeUser } = authSlice.actions;
export default authSlice.reducer;

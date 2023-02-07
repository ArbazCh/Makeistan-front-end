import { createSlice,AsyncThunk } from "@reduxjs/toolkit";
import { userLogin, userRegister } from './thunk';

const initialState= {
  name: "",
  token: "",
  loading: false,
  error:"",
}

const userSlice = createSlice({
  name: "user",
  initialState: {
    
  },
  reducers: {
    // setUser(state, action) {},
    addToken :(state,action) =>{
      state.token = localStorage.getItem("token")
    }
    
  },
  extraReducers:{
    [userLogin.pending]: (state, action)=>{
      state.loading = true
    },
    [userLogin.fulfilled]: (state, {payload:{ token, loading, error}})=>{
      state.loading = false;
      if(state.error){
        console.log(error)
      }
      else{
        state.token=token;
        localStorage.setItem("token", token)
      }
      
    },
    [userLogin.rejected]: (state, action)=>{
      state.loading = true
    }
  }
});
export const { setUser, addToken } = userSlice.actions;
export default userSlice.reducer;

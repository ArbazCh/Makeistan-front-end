import { createSlice } from "@reduxjs/toolkit";
import { userRegister } from "./thunk";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

const initialState = {
    user : null,
}

const regSlice = createSlice({
    name : "reg",
    initialState,

    reducers:{

    },
    extraReducers(builder){
        builder
        .addCase(
            userRegister.fulfilled,  (state, action) =>{
                const user = action.payload;
                state.user = user;
                toast.success("Successfully registered");

            }
        )
        .addCase(
            userRegister.rejected,  (state, action) =>{
                state.error = state.error.message
                toast.error(" Registered Unsuccessful ");

            }
        )
    }
});
export default regSlice.reducer;  

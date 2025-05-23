
import { createSlice } from "@reduxjs/toolkit";

const colorSlice=createSlice({
    name:"mycolor",
    initialState:{
        color:"blue"
    },
    reducers:{
        changeColor:(state,actions)=>{
           state.color=actions.payload
        }
    }
})



export const {changeColor}=colorSlice.actions;
export default colorSlice.reducer;

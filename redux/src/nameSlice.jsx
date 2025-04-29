import { createSlice } from "@reduxjs/toolkit";
const nameSlice=createSlice({
    name:"myname",
    initialState:{
        user:"Ananya"
    },
    reducers:{
        changeName:(state)=>{
            state.user="Aditi"
        }
    }
})


export const {changeName}=nameSlice.actions;
export default nameSlice.reducer;
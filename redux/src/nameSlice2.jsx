
import { createSlice } from "@reduxjs/toolkit";



const nameSlice=createSlice(
    {
        name: "myName",
        initialState:{
            name:"Ananya"
        },
        reducers:{
            changeName:(state,actions)=>{
                state.name=actions.payload
            }
        }
    }
)

export const {changeName} = nameSlice.actions;
export default nameSlice.reducer;
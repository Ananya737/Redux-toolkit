
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






const colorSlice=createSlice(
    {
        name:"myColor",
        initialState:{
            color:"red"
        },
        reducers:{
            changeColor:(state,actions)=>{
                state.color=actions.payload
            }
        }
    }
)



export const {changeName} = nameSlice.actions;
export const {changeColor}= colorSlice.actions;


export const nameReducer= nameSlice.reducer;
export const colorReducer= colorSlice.reducer;
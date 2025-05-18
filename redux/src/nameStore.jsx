import { configureStore } from "@reduxjs/toolkit";
import  {nameReducer,colorReducer}  from "./nameSlice2";

const store=configureStore(
    {
        reducer:{
            myName:nameReducer,
            myColor:colorReducer
        }
    }

    
)
export default store;
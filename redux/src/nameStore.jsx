import { configureStore } from "@reduxjs/toolkit";
import  changeName  from "./nameSlice2";

const store=configureStore(
    {
        reducer:{
            myName:changeName
        }
    }

    
)
export default store;
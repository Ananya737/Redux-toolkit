import { configureStore } from "@reduxjs/toolkit"
import myReducer from "./CounterSlice";


const store = configureStore(
    {
        reducer:{
            //your reducer goes here
            mycounter:myReducer
        }
    }
)

export default store;
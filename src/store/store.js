import { configureStore } from "@reduxjs/toolkit";
import  authReducer  from "./AuthSlice";
import counterReducer from "./counterSlice";

const store=configureStore({
    reducer:{auth:authReducer,counter:counterReducer}
})

export default store;


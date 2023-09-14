import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../db/UserSlice";

const Store=configureStore({
    reducer:{
        userStore:UserSlice
    }
})

export default Store;
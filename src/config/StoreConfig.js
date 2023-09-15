import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../db/UserSlice";

const Store=configureStore({
    reducer:{
        //User Redux Store
        userStore:UserSlice
    }
})

export default Store;
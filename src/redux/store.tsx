import { configureStore } from "@reduxjs/toolkit";
import productDetailSlice from "./productDetailSlice";
import productSlice from "./productSlice";
import userLoginSlice from "./userLoginSlice";


const store = configureStore({
    reducer: {
        productSlice,
        productDetailSlice,
        userLoginSlice
    }
})

export default store

export type RootState = ReturnType <typeof store.getState>
export type DispatchType = typeof store.dispatch
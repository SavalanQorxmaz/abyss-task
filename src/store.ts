import { configureStore } from "@reduxjs/toolkit"
import schemaSliceReducer from "./schemaSlice"


export const store = configureStore({
    reducer:{
        schema:schemaSliceReducer
    }
})
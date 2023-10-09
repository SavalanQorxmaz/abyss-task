import { configureStore } from "@reduxjs/toolkit"
import schemaSliceReducer from "./schemaSlice"
import scaleSliceReducer from './scaleSlice'


export const store = configureStore({
    reducer:{
        schema:schemaSliceReducer,
        scale: scaleSliceReducer
    }
})
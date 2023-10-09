import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    scale:100
}

const scaleSlice = createSlice({
    name:'scale',
    initialState,
    reducers:{
        setScale: (state,action)=>{
            state.scale = action.payload
        }
    }
})



export const {setScale} = scaleSlice.actions
export const getScale = (state:{scale:{scale:number}})=>state.scale.scale

export default scaleSlice.reducer
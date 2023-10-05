import { createSlice } from "@reduxjs/toolkit";

interface subcategoriesType {
    subCategories: [string[],string[]]
}

const categoryIDArray = ['1']
const categoryNameArray = ['Categories']

const initialState = {

subCategories:[['1'],['Categories']]
}

const schemaSlice = createSlice({
    name: 'schema',
    initialState,
    reducers:{
getSubCategories: (state,action)=>{

    let elementLength = action.payload.split('-').length
    const indexArray = [];
    indexArray.push(categoryIDArray.map((value,index)=>{
        if(value.includes(action.payload) && action.payload.split('-').length === value.split('-').length -1){
            return index
        }
    }))

    const subcategoriesID = []
    const subCategoriesNames = []
 if(indexArray.length>1){
    for(let i=0;i<indexArray.length;i++){
        subcategoriesID.push(categoryIDArray[i])
        subCategoriesNames.push(categoryNameArray[i])
    }

    state.subCategories = [subcategoriesID, subCategoriesNames]
 }
 else state.subCategories = [[],[]]


},
addSubCategory: (state, action)=>{
    const indexArray = [];
    indexArray.push(categoryIDArray.map((value,index)=>{
        if(value.includes(action.payload) && action.payload.split('-').length === value.split('-').length -1){
            return Number(value.split('-').pop())
        }
    }))
    if(indexArray.length>1){
        indexArray.sort()
    }

}

    }
})


export const {getSubCategories} = schemaSlice.actions

export const selectSchema = (state:{schema:subcategoriesType})=>state.schema.subCategories


export default schemaSlice.reducer
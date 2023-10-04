import { useEffect, useState } from "react"
import Category from "./Category"

const Categories = () => {

  const [subCategoryName,setSubCategoryName] = useState<string[]>([])
const [subCategoryCountChange,setSubCategoryCountChange] = useState({
  prev:0,new:0
})
  const addNewCategory = ()=>{
    setSubCategoryName(prev=> [...prev,'salam'])

  }

  useEffect(()=>{
    setSubCategoryCountChange(prev=>({['prev']:prev.new,['new']:subCategoryName.length}))

  },[subCategoryName])


  return (
    <div className="categories">
        <button onClick={addNewCategory}>newcategory</button>

        {
          subCategoryCountChange.prev !==subCategoryCountChange.new ?
          subCategoryName.map(value=>(
            <Category/>
          ))
          :
          null
        }
      
    </div>
  )
}

export default Categories
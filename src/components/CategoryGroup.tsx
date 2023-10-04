import { useState } from "react"
import Category from "./Category"

const CategoryGroup = () => {

  const [subCategoryCount,setSubCategoryCount] = useState({currentCount:0,newCount:0})
  return (
    <div>
     <div>
            <span>Category</span>
            <span >+</span>
            <span>change</span>
            <span>Delete</span>
        </div>
        <div>topVertical</div>
        <div>horizontalLine</div>


    </div>
  )
}

export default CategoryGroup
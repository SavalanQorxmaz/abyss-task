import { useEffect, useState } from "react"


const Category = (props:any)=>{
  const [categoryName,setCategoryName] = useState('')
  const {subCategoryName,setSubCategoryName} = props
  const [subCategoryNameArray,setSubCategoryNameArray] = useState<string[]>([''])
  const [subCategoryCountChange,setSubCategoryCountChange] = useState({
    prev:0,new:0
  })
    const addNewCategory = ()=>{
      setSubCategoryNameArray(prev=> [...prev,''])
  
    }
  
    useEffect(()=>{
      setSubCategoryCountChange(prev=>({['prev']:prev.new,['new']:subCategoryNameArray.length}))
  
    },[subCategoryNameArray])
  
  
    return (
      <div className="categories">
          <div>
            {
              subCategoryName !==''?
              <span>{subCategoryName}</span>
              :
              <input type="text" placeholder="ad daxil et" />
            }
          <button onClick={addNewCategory}>newcategory</button>
          </div>
  
        <div className="category-group">
        {
            subCategoryCountChange.prev !==subCategoryCountChange.new ?
            subCategoryNameArray.map(value=>(
              <Category subCategoryname = {value} setSubCategoryName = {setCategoryName}/>
            ))
            :
            null
          }
        </div>
        
      </div>
    )
}



const Categories = () => {

 
  return (
    <div className="categories">
    <Category subCategoryName = 'categories'/>
      
    </div>
  )
}

export default Categories
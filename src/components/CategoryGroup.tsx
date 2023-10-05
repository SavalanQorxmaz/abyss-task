import { useState,useRef } from "react"
import Category from "./Category"

const CategoryGroup = () => {

  const[categoryName,setCategoryName] = useState('')
  const [newCategory, setNewCategory] = useState(false)

 
  function nameReady(e:any){
    console.log(e.currentTarget.parentNode.children[1].value)
        setCategoryName(e.currentTarget.parentNode.children[1].value)
        e.currentTarget.parentNode.children[1].style.display = 'none'
        e.currentTarget.parentNode.children[0].innerText = e.currentTarget.parentNode.children[1].value
        e.currentTarget.parentNode.children[0].style.display = 'block'
        setNewCategory(false)
      }
  function addCategory(e:any){
    
    setNewCategory(true)
    const category =document.createElement('div')
  
    const categoryNameSpan = document.createElement('span')
    categoryNameSpan.innerText = categoryName
    category.appendChild(categoryNameSpan) 
 
    const categoryNameInput = document.createElement('input')
    categoryNameInput.innerText = categoryName
    category.appendChild(categoryNameInput)
    categoryNameSpan.style.display = 'none'
   
    const categoryAddButton = document.createElement('button')
    categoryAddButton.innerText = '+'
    categoryAddButton.onclick = addCategory
    category.appendChild(categoryAddButton)
    const categoryChangeButton = document.createElement('button')
    categoryChangeButton.innerText = 'ch'
    categoryChangeButton.onclick = nameReady
    category.appendChild(categoryChangeButton)
    const categoryDeleteButton = document.createElement('button')
    categoryDeleteButton.innerText = 'del'
    category.appendChild(categoryDeleteButton)
    
   e.currentTarget.parentNode.appendChild(category)
  }


  const [subCategoryCount,setSubCategoryCount] = useState({currentCount:0,newCount:0})
  return (
    <div >
     <div>
            <span>Category</span>
            <span onClick={addCategory}>+</span>
            <span>change</span>
            <span>Delete</span>
        </div>
       


    </div>
  )
}

export default CategoryGroup
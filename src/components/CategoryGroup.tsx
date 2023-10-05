import { useState,useRef } from "react"
import Category from "./Category"

const CategoryGroup = () => {

  const idRef = useRef(0)
  const[categoryName,setCategoryName] = useState('')
  const [newCategory, setNewCategory] = useState(false)

 
  function nameReady(e:any){
   
    if(newCategory=== false && e.currentTarget.parentNode.children[3].hasAttribute('class')){
      setNewCategory(true)
      e.currentTarget.parentNode.children[1].style.display = 'inline-block'
      e.currentTarget.parentNode.children[1].value = e.currentTarget.parentNode.children[0].innerText
      e.currentTarget.parentNode.children[0].style.display = 'none'
      e.currentTarget.parentNode.children[3].removeAttribute('class')
      e.currentTarget.parentNode.children[4].removeAttribute('class')
    }
    else{
      if(e.currentTarget.parentNode.children[1].value.length<5){
        e.currentTarget.disabled = true
      }
     else{
      setNewCategory(false)
      setCategoryName(e.currentTarget.parentNode.children[1].value)
      e.currentTarget.parentNode.children[1].style.display = 'none'
      e.currentTarget.parentNode.children[0].innerText = e.currentTarget.parentNode.children[1].value
      e.currentTarget.parentNode.children[0].style.display = 'inline-block'
      e.currentTarget.parentNode.children[3].classList.add('change-button')
      e.currentTarget.parentNode.children[4].classList.add('delete-button')
     }
    }
    
        
      }
  function addCategory(e:any){
    
    setNewCategory(true)
    const category = document.createElement('div')
    
  
    const categoryNameSpan = document.createElement('span')
    categoryNameSpan.innerText = categoryName
    category.appendChild(categoryNameSpan) 
 
    const categoryNameInput = document.createElement('input')
    categoryNameInput.innerText = categoryName
    category.appendChild(categoryNameInput)
    categoryNameSpan.style.display = 'none'
   
    const categoryAddButton = document.createElement('button')
    categoryAddButton.id = (idRef.current + 1).toString()
    categoryAddButton.classList.add('add-button')
    categoryAddButton.innerText = '+'
    categoryAddButton.onclick = addCategory
    category.appendChild(categoryAddButton)
    categoryAddButton.disabled = true
    const categoryChangeButton = document.createElement('button')
    // categoryChangeButton.classList.add('change-button')
    categoryChangeButton.innerText = 'ch'
    categoryChangeButton.onclick = nameReady
    category.appendChild(categoryChangeButton)
    const categoryDeleteButton = document.createElement('button')
    // categoryDeleteButton.classList.add('delete-button')
    categoryDeleteButton.innerText = 'del'
    categoryDeleteButton.onclick = deleteCategory
    category.appendChild(categoryDeleteButton)
    
   e.currentTarget.parentNode.appendChild(category)
  }

  function deleteCategory(e:any){
    setNewCategory(false)
    e.currentTarget.parentNode.remove()
  }

  document.addEventListener('click',()=>{
if(newCategory === true){
  document.querySelectorAll('button').forEach(el=>{
    if(el.hasAttribute('class') ){
      el.disabled = true
    }
  })
}
else if(newCategory === false){
  document.querySelectorAll('button').forEach(el=>{
    if(el.disabled === true ){
      el.disabled = false
    }
  })
}
  })


  const [subCategoryCount,setSubCategoryCount] = useState({currentCount:0,newCount:0})
  return (
    <div >
     <div>
            <span>Category</span>
            <button className="add-button" id="0" onClick={addCategory}>+</button>
        </div>
       


    </div>
  )
}

export default CategoryGroup
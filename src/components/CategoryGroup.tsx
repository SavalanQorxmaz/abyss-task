import { useState,useRef } from "react"
import Category from "./Category"

const CategoryGroup = () => {

  const idRef = useRef(0)
  const[categoryName,setCategoryName] = useState('')
  const [newCategory, setNewCategory] = useState(false)

 
  function nameReady(e:any){
   
    if(newCategory=== false && e.currentTarget.parentNode.children[3].classList.contains('change-button')){
      setNewCategory(true)
      e.currentTarget.parentNode.children[1].style.display = 'inline-block'
      e.currentTarget.parentNode.children[1].value = e.currentTarget.parentNode.children[0].innerText
      e.currentTarget.parentNode.children[0].style.display = 'none'
      e.currentTarget.parentNode.children[3].classList.remove('change-button')
      e.currentTarget.parentNode.children[3].innerHTML = '&#9989'
      e.currentTarget.parentNode.children[4].classList.remove('delete-button')
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
      e.currentTarget.parentNode.children[3].innerHTML = ' &#9997'
      e.currentTarget.parentNode.children[4].classList.add('delete-button')
     }
    }
    
        
      }
  function addCategory(e:any){
    
    setNewCategory(true)
    console.log()
    e.currentTarget.parentNode.children[0].classList.add('category-name-span-hassub')
    const category = document.createElement('div')
    category.classList.add('category')
  
    const categoryNameSpan = document.createElement('span')
    categoryNameSpan.innerText = categoryName
    categoryNameSpan.classList.add('category-name-span')
    category.appendChild(categoryNameSpan) 
 
    const categoryNameInput = document.createElement('input')
    categoryNameInput.innerText = categoryName
    categoryNameInput.classList.add('category-name-input')
    category.appendChild(categoryNameInput)
    categoryNameSpan.style.display = 'none'
   
    const categoryAddButton = document.createElement('button')
    categoryAddButton.id = (idRef.current + 1).toString()
    categoryAddButton.classList.add('button')
    categoryAddButton.classList.add('add-button')
    categoryAddButton.innerHTML = '&#10010'
    categoryAddButton.onclick = addCategory
    category.appendChild(categoryAddButton)
    categoryAddButton.disabled = true
    const categoryChangeButton = document.createElement('button')
    categoryChangeButton.classList.add('button')
    categoryChangeButton.innerHTML = '&#9989'
    categoryChangeButton.onclick = nameReady
    category.appendChild(categoryChangeButton)
    const categoryDeleteButton = document.createElement('button')
    categoryDeleteButton.classList.add('button')
    categoryDeleteButton.innerHTML = '&#10007'
    categoryDeleteButton.onclick = deleteCategory
    category.appendChild(categoryDeleteButton)

    const categoryGroup = document.createElement('div')
    categoryGroup.classList.add('subcategory-group')
    // e.currentTarget.parentNode.after(categoryGroup)
    
    

    if(e.currentTarget.parentNode.parentNode.children.length ===2){
      console.log(e.currentTarget.parentNode.parentNode)
      e.currentTarget.parentNode.nextSibling.appendChild(categoryGroup)
      categoryGroup.appendChild(category)
    }
    else{
    
      const subCategoryGroup = document.createElement('div')
      subCategoryGroup.classList.add('category-group')
      e.currentTarget.parentNode.parentNode.appendChild(subCategoryGroup)
      subCategoryGroup.appendChild(categoryGroup)
      categoryGroup.appendChild(category)
      console.log(e.currentTarget.parentNode.parentNode)
    }
  }

  function deleteCategory(e:any){
    setNewCategory(false)
    e.currentTarget.parentNode.parentNode.remove()
  }

  document.addEventListener('click',()=>{
if(newCategory === true){
  document.querySelectorAll('button').forEach(el=>{
    if(el.classList.contains('add-button') || el.classList.contains('change-button') || el.classList.contains('delete-button') ){
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
    <div className="subcategory-group">
     <div className="category">
            <span>Category</span>
            <button className="add-button" id="0" onClick={addCategory}>+</button>
        </div>
        <div className="category-group">

        </div>
       


    </div>
  )
}

export default CategoryGroup
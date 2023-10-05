import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectSchema, getSubCategories } from '../schemaSlice'


const Cat = (props:any)=>{
  const {id, name} = props

  const dispatch = useDispatch()
  const selectedSchema = useSelector(selectSchema)
console.log(selectedSchema)

useEffect(()=>{
dispatch(getSubCategories(id))
},[])
  return (
 <div>
     <div id={id}>
    <span>{name}</span>
    <span >+</span>
    <span>change</span>
    <span>Delete</span>
</div>
<div>
  {
    selectedSchema[0].length>1 ?
    selectedSchema[0].map((value, index)=>
      <Cat key={index} id = {value} name = {selectedSchema[1][index]}/>
    )
    :
    null
  }
</div>
 </div>
  )

}

const Category = () => {


    
  return (
    <div className='category'>
      <Cat id = '1' name = 'categories'/>
    </div>
  )
}

export default Category
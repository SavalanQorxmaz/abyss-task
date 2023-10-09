import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getScale,setScale } from '../scaleSlice'

const Header = () => {

  const currentScale = useSelector(getScale)
  const dispatch = useDispatch()

  const smallerF = ()=>{
    if(currentScale>10){
dispatch(setScale(currentScale-10))
    }
  }
  const biggerF = ()=>{
    if(currentScale<200){
      dispatch(setScale(currentScale+10))
    }
  }
  return (
    <div className='header'>
      <div className='header-left'>
        <span>Services</span>
        <span>0</span>
      </div>
      <div className='header-right'>
        <span>LIST VIEW</span>
        <span title='Move to center'> center</span>
        <span onClick={smallerF}>-</span>
        <span>{currentScale}%</span>
        <span onClick={biggerF}>+</span>
      </div>
    </div>
  )
}

export default Header
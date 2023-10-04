import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-left'>
        <span>Services</span>
        <span>{0}</span>
      </div>
      <div className='header-right'>
        <span>LIST VIEW</span>
        <span title='Move to center'> center</span>
        <span>-</span>
        <span>{100}%</span>
        <span>+</span>
      </div>
    </div>
  )
}

export default Header
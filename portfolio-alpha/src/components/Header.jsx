import React from 'react'
import Switch from './Switch'
import Logo from './Logo'

const Header = () => {
  return (
    <div className='p-5 pt-2  mx-auto flex items-center item-center justify-between '>
      <Logo/>
      <Switch/>
    </div>
  )
}

export default Header
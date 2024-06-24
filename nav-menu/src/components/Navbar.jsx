import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  const linkClass = ({isActive}) => isActive ?"activeLink" : ""
  return (
    <nav className='navbar-wrapper'>
      <ul>
        <li className='nav-link'><NavLink to={'/'} className={linkClass} >Home</NavLink></li>
        <li className='nav-link'><NavLink to={'/message'} className={linkClass} >Messages</NavLink></li>
        <li className='nav-link'><NavLink to={'/music'} className={linkClass} >Music</NavLink></li>
        <li className='nav-link'><NavLink to={'/setting'} className={linkClass} >Settings</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar
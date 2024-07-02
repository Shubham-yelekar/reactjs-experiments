import React from 'react'
import {HomeIcon, ArchivesIcon, AboutIcon, ProjectsIcon} from './icons'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const activeLink = ({isActive}) => isActive ? '#000' : 'gray';
  return (
    <nav className='navbar-wrapper'>
      <NavLink to="/">
        {({ isActive }) => <HomeIcon color={activeLink({isActive})} />}
      </NavLink>
      <NavLink to="/projects">
        {({ isActive }) => <ProjectsIcon color={activeLink({isActive})} />}
      </NavLink>
      <NavLink to="/archives">
        {({ isActive }) => <ArchivesIcon color={activeLink({isActive})} />}
      </NavLink>
      <NavLink to="/about">
        {({ isActive }) => <AboutIcon color={activeLink({isActive})} />}
      </NavLink>
    </nav>
  )
}

export default Navbar

import { NavLink } from 'react-router-dom'
import HomeIcon from './icons/HomeIcon'
import MessageIcon from './icons/MessageIcon'
import MusicIcon from './icons/MusicIcon'
import SettingIcons from './icons/SettingIcons'
import { useTheme } from '../theme-context'
const Navbar = () => {
  const linkClass = ({isActive}) => isActive ?"activeLink" : ""


  return (
    <nav className='navbar-wrapper'>
      <ul>
        <li className='nav-link'><NavLink to={'/'} className={linkClass} ><HomeIcon color= 'red'/></NavLink></li>
        <li className='nav-link'><NavLink to={'/message'} className={linkClass} ><MessageIcon color= 'blue'/></NavLink></li>
        <li className='nav-link'><NavLink to={'/music'} className={linkClass} ><MusicIcon color ="orange"/></NavLink></li>
        <li className='nav-link'><NavLink to={'/setting'} className={linkClass} ><SettingIcons color = "red"/></NavLink></li>
      </ul>

    </nav>
  )
}

export default Navbar
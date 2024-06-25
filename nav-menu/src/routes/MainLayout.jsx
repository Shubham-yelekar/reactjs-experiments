
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import ToggleSwitch from '../components/ToggleSwitch'


const MainLayout = () => {
  return (
    <>
    <ToggleSwitch/>
    <Outlet/>
      <Navbar/>

    </>
  )
}

export default MainLayout
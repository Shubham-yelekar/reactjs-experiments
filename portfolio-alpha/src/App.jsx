

import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import MainLayout from './layout/MainLayout'
import {About, Archives, Home, Projects} from './pages/index'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element= {<Home/>}></Route>
        <Route path='/projects' element= {<Projects/>}></Route>
        <Route path='/archives' element= {<Archives/>}></Route>
        <Route path='/about' element= {<About/>}></Route>
      </Route>
    )
  )

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App

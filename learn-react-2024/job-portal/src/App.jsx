import React from 'react'
import {Route , createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import './index.css';
import './pages/HomePage'
import HomePage from './pages/HomePage';
import MainLayout from './layout/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFound from './pages/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/jobs' element={<JobsPage/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Route>
)
)

const App = () => {
  return <RouterProvider router={router}></RouterProvider>
}
export default App
import React from 'react'
import {Route , createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import './index.css';
import './pages/HomePage'
import HomePage from './pages/HomePage';
import MainLayout from './layout/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFound from './pages/NotFound';
import JobPage, {jobLoader} from './pages/JobPage';
import AddJobs from './pages/AddJobs';
import EditPage from './pages/EditPage';


const App = () => {
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob)
    })
    return
  }

  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`,{
      method: 'DELETE',
    })
    return
  }

  const updateJob = async (job) => {

      const res = await fetch(`/api/jobs/${job.id}`,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(job)
      })
      return
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='/jobs' element={<JobsPage/>}/>
          <Route path='/add-job' element={<AddJobs addJobSubmit={addJob}/> }/>
          <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader = {jobLoader}/>
          <Route path='/edit-job/:id' element={<EditPage updateSubmit={updateJob} />} loader = {jobLoader}/>
          <Route path='*' element={<NotFound/>}/>
      </Route>
  )
  )
  return <RouterProvider router={router}></RouterProvider>
}
export default App
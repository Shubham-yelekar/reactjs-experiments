
import "./App.css"
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import MainLayout from "./routes/MainLayout";
import Home from "./pages/Home"
import Message from "./pages/Message"
import Music from "./pages/Music"
import Setting from "./pages/Setting"
import PageNotFound from "./pages/PageNotFound"
import { ThemeProvider } from "./theme-context";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<Home/>}></Route>
        <Route path='/message' element={<Message/>}></Route>
        <Route path='/music' element={<Music/>}></Route>
        <Route path='/setting' element={<Setting/>}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Route>
    )
  )

  return (
    <ThemeProvider>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>

  )
}

export default App

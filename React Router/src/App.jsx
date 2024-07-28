import './App.css'
import About from './components/About'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Trail from './components/Trail'

function App() {

  const router = createBrowserRouter([
    {
      path: "/home",
      element:<><Navbar/><Home/></>
    },
    {
      path: "/login",
      element: <><Navbar/><Login/></>
    },
    {
      path: "/about",
      element: <><Navbar/><About/></>
    },   
    {
      path: "/about",
      element: <><Navbar/><About/></>
    },
    {
      path: "/trail",
      element: <><Navbar/><Trail/></>
    }
  ])

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App

import './App.css'
import About from './components/About'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/about",
      element: <About/>
    }
  ])

  return (
    <>
      <Navbar />

    </>
  )
}

export default App

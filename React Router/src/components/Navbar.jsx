import React from 'react'
import {createBrowserRouter} from 'react-router-dom';

const Navbar = () => {

    return (
    <div>
      <ul>
        <a href='/home'><li>Home</li></a>
        <a href='/about'><li>About</li></a>
        <a href='/login'><li>Login</li></a>
      </ul>
    </div>
  )
}

export default Navbar

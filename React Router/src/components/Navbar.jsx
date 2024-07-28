import React from 'react'
import {createBrowserRouter} from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
    <div>
      <ul>
        <Link to='/home'><li>Home</li></Link>
        <Link to='/about'><li>About</li></Link>
        <Link to='/login'><li>Login</li></Link>
      </ul>
    </div>
  )
}

export default Navbar

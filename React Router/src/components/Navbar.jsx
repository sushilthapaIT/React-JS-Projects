import React from 'react'
import {createBrowserRouter} from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return (
    <div>
        <ul>
          <li>
            <NavLink onClick={() => {document.title = "Home"}} className={(e) => (e.isActive ? 'red' : '')} to='/home'>Home</NavLink>
          </li>
          <li>
            <NavLink onClick={() => {document.title = "Home"}} className={(e) => (e.isActive ? 'red' : '')} to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink onClick={() => {document.title = "Home"}} className={(e) => (e.isActive ? 'red' : '')} to='/login'>Login</NavLink>
          </li>
        </ul>
      </div>
  )
}

export default Navbar

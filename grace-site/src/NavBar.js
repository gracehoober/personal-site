import React from "react";
import { Link, NavLink } from 'react-router-dom';

/**
 *
 *
 */
function NavBar() {
  return (
    <nav className="NavBar">
      <h1 className='text-white'>Grace Hoober</h1>
      <NavLink to="/home">About</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}
export default NavBar;


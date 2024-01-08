import React from "react";
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';
/**
 *
 *
 */
function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink to="/home">About</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}
export default NavBar;
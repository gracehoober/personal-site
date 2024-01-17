import React from "react";
import { NavLink } from 'react-router-dom';

/**
 *
 *
 */
function NavBar() {
  return (
    <nav className="flex flex-row fixed top-0 w-screen h-16 text-center text-forestgreen bg-sage drop-shadow-xl">
      <h1 className="text-green-700 ">Grace Hoober</h1>
      <NavLink className="text-green-700 focus:text-redbrown
      hover:text-redbrown" to="/home">About</NavLink>
      <NavLink className="focus:text-redbrown hover:text-redbrown" to="/projects">Projects</NavLink>
      <NavLink className="focus:text-redbrown hover:text-redbrown" to="/contact">Contact</NavLink>
    </nav>
  );
}
export default NavBar;


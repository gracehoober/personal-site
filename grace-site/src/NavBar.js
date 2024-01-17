import React from "react";
import { NavLink } from 'react-router-dom';

/**
 *
 *
 */
function NavBar() {
  return (
    <nav className="flex flex-row justify-around items-center fixed top-0 w-screen h-16 text-center text-forestgreen text-xl bg-sage drop-shadow-xl">
      <h1 className="text-green-700 ">Grace Hoober</h1>
      <NavLink className="text-green-700 focus:text-navy
      hover:text-redbrown" to="/home">About</NavLink>
      <NavLink className="focus:text-navy hover:text-navy" to="/projects">Projects</NavLink>
      <NavLink className="focus:text-navy hover:text-navy" to="/contact">Contact</NavLink>
    </nav>
  );
}
export default NavBar;


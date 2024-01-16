import React from "react";
import { NavLink } from 'react-router-dom';

/**
 *
 *
 */
function NavBar() {
  return (
    <nav className="flex flex-column">
      <h1 className="self-start basis-1/4">Grace Hoober</h1>
      <div className="basis-3/4">
        <NavLink className="" to="/home">About</NavLink>
        <NavLink className="" to="/projects">Projects</NavLink>
        <NavLink className="" to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}
export default NavBar;


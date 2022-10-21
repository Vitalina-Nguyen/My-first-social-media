import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const addActive = () => {
    return ({ isActive }) => (isActive ? s.active : '')
}

function Navbar() {
  return (
    <nav className={s.navbar}>
      <ul>
        <li>
            <NavLink to="/profile" className={addActive ()}>Profile</NavLink>
        </li>
        <li>
            <NavLink to="/dialogs" className={addActive()}> Massage </NavLink>
        </li>
        <li>
            <NavLink to="/news" className={addActive()}> News </NavLink>
        </li>
        <li>
            <NavLink to="/music" className={addActive()}> Music </NavLink>
        </li>
        <li>
            <NavLink to="/settings" className={addActive()}> Settings </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

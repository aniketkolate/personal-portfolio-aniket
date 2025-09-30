import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import menuIcon from '@/assets/icons/menu.png';

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="navbar-container">
        <ul className="navbar-links">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => isActive ? "active" : ""}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav className="navbar-container-mobile">
        <img src={menuIcon} alt="Menu" />
      </nav>
    </>
  );
};

export default Navbar;
import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

export const Navbar = () => {
  return (
    <nav className="navMenu">
      <div className="App">
        <ul className="nav">
          <div className="logo">
            <li>
              <NavLink to="/main">
                <img src="./favicon.ico" class="brand"></img>
              </NavLink>
            </li>
          </div>
          <div className="navlinks">
            <li>
              <NavLink to="/main">Main</NavLink>
            </li>
            <li>
              <NavLink to="/">Auth</NavLink>
            </li>
            <li>
              <NavLink to="/consult">Consult</NavLink>
            </li>
            <li>
              <NavLink to="/market">Buy</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

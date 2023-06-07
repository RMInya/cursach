import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../context/Auth.context";
import userphoto from "../images/exit.jpg";
import logo from "../images/logo.jpg";
import "../index.css";

export const Navbar = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();

  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history.push("/");
  };

  return (
    <nav className="navMenu">
      <div className="App">
        <ul className="nav">
          <div className="logo">
            <li>
              <NavLink to="/main">
                <img src={logo}></img>
              </NavLink>
            </li>
          </div>
          <div className="navlinks">
            {/* <li>
              <NavLink to="/main">Main</NavLink>
            </li> */}
            <li>
              <NavLink to="/consult">Consult</NavLink>
            </li>
            <li>
              <NavLink to="/market">Market</NavLink>
            </li>
            {/* <li>
              <NavLink to="/profile">Profile</NavLink>
            </li> */}
          </div>
          <li className="exitlinks">
            <a href="/" onClick={logoutHandler}>
              <img src={userphoto}></img>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

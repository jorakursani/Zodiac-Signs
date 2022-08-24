import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/Header.css";
const Header = () => {
  return (
    <header className="header">
      <h1>Zodiac Signs</h1>
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>{" "}
      | &nbsp;
      <NavLink className="nav-link" to="/articles">
        Articles
      </NavLink>
    </header>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link className="navbar-links" to="/">
        <img className="navbarlogo" src={logo} alt="logo" />
      </Link>
      <ul className="navbar-links">
        <Link className="navbar-links" to="/">
          Recipes
        </Link>
        <Link className="navbar-links" to="/inventory">
          Inventory
        </Link>
        <Link className="navbar-links" to="/account-info">
          Account Info
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;

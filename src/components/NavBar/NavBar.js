import React from "react";
import "./NavBar.css";

const NavBar = ({ children }) => (
  <nav className="navbar">
   {children}
  </nav>
);

export default NavBar;

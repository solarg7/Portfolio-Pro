import React from "react";
import NavMessage from "../NavMessage";
import "./Nav.css";

// Component for the Navbar

const Nav = props => (
  <nav className="navbar">
    <ul>
      <li className="brand">
        <a href="/">Profile</a>
      </li>
      <li className="brand">
        <a href="/">Skills</a>
      </li>
      <li className="brand">
        <a href="/">Experience</a>
      </li>
      <li className="brand">
        <a href="/">Contact</a>
      </li>
    </ul>
  </nav>
);

export default Nav;

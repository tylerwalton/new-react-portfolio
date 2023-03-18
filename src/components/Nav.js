import React from "react";
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div>
      <ul className="navbar">
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

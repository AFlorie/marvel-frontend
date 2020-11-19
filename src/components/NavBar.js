import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navBar">
      <ul>
        <Link to="/">
          <li>Personnages</li>
        </Link>
        <li>Comics</li>
        <li>Favoris</li>
      </ul>
    </nav>
  );
};

export default NavBar;

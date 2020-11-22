import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navBar">
      <ul>
        <Link to="/">
          <li>Personnages</li>
        </Link>
        <Link to="/comics">
          <li>Comics</li>
        </Link>
        <Link to="/favoris">
          <li>Favoris</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;

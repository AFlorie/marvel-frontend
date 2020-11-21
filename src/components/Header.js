import React from "react";
import marvel from "../img/marvel.png";
import characters from "../img/headerPersos.jpg";

const Header = () => {
  return (
    <header>
      <img src={marvel} alt="" />
      <img src={characters} alt="" />
    </header>
  );
};

export default Header;

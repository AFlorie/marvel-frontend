import React from "react";
import footerImg from "../img/footer.jpg";

const Footer = () => {
  return (
    <footer>
      <img src={footerImg} alt="" />
      <div className="glow">
        Made with <span>React</span> at <span>LeReacteur</span> by
        <span> Florie</span> - Data provided by Marvel. © 2014 Marvel
      </div>
    </footer>
  );
};

export default Footer;

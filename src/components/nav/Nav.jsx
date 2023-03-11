import React from "react";
import { StyledNav } from "./Nav.Styled";
import { images } from "../../constants/images";

const Nav = () => {
  return (
    <StyledNav>
      <div className="container-menu-icon">
        <img src={images.hamburger} alt="" className="menu-icon" />
      </div>

      <div className="container-logo">
        <img src={images.logo} alt="room" className="logo" />
      </div>

      <div className="container-links">
        <a href="#">home</a>
        <a href="#">shop</a>
        <a href="#">about</a>
        <a href="#">contact</a>
      </div>
    </StyledNav>
  );
};

export default Nav;

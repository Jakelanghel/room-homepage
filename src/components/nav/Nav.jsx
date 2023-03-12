import React, { useState } from "react";
import { StyledNav } from "./Nav.Styled";
import { images } from "../../constants/images";
import MobileDropDown from "./mobile-dropdown/MobileDropDown";

const Nav = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const handleClick = () => {
    setNavIsOpen((oldState) => !oldState);
  };
  return (
    <StyledNav>
      <div className="container-menu-icon">
        <img
          src={images.hamburger}
          alt=""
          className="menu-icon"
          onClick={handleClick}
        />
      </div>

      <div className="container-logo">
        <img src={images.logo} alt="room" className="logo" />
      </div>

      {navIsOpen ? (
        <MobileDropDown
          handleClick={handleClick}
          closeIcon={images.closeIcon}
        />
      ) : null}
    </StyledNav>
  );
};

export default Nav;

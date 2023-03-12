import React from "react";

const MobileDropDown = (props) => {
  const { handleClick, closeIcon } = props;
  return (
    <div className="container-menu">
      <div className="container-flex">
        <div className="container-close-icon">
          <img src={closeIcon} alt="" onClick={handleClick} />
        </div>

        <div className="container-links">
          <a href="#">home</a>
          <a href="#">shop</a>
          <a href="#">about</a>
          <a href="#">contact</a>
        </div>
      </div>
    </div>
  );
};

export default MobileDropDown;

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navVariants } from "./navVariants";

const MobileDropDown = (props) => {
  const { handleClick, closeIcon, navIsOpen } = props;
  return (
    <AnimatePresence mode="wait">
      {navIsOpen ? (
        <motion.div
          variants={navVariants}
          initial="closed"
          animate="open"
          exit="exit"
          className="container-menu"
        >
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
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default MobileDropDown;

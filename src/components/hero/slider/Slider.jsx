import React, { useState, useEffect } from "react";
import { StyledSlider } from "./Slider.Styled";
import SliderActions from "./slider-actions/SliderActions";
import { motion, AnimatePresence } from "framer-motion";

const imgVariants = {
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  hidden: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

const Slider = (props) => {
  const { slideArr, currentSlide, setCurrentSlide } = props;
  return (
    <StyledSlider className="slider">
      <AnimatePresence mode="wait">
        <motion.img
          variants={imgVariants}
          animate="visible"
          initial="hidden"
          exit="exit"
          key={currentSlide}
          src={slideArr[currentSlide]}
          alt=""
          className="slider-img"
        />
      </AnimatePresence>

      <SliderActions
        setCurrentSlide={setCurrentSlide}
        currentSlide={currentSlide}
      />
    </StyledSlider>
  );
};

export default Slider;

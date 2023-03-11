import React from "react";
import { StyledSlider } from "./Slider.Styled";
import SliderActions from "./slider-actions/SliderActions";

const Slider = (props) => {
  const { slideArr, currentSlide, setCurrentSlide } = props;
  return (
    <StyledSlider>
      <img src={slideArr[currentSlide]} alt="" className="slider-img" />
      <SliderActions
        setCurrentSlide={setCurrentSlide}
        currentSlide={currentSlide}
      />
    </StyledSlider>
  );
};

export default Slider;

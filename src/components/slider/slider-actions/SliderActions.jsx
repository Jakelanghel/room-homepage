import React from "react";
import { images } from "../../../constants/images";
import { StyledSliderActions } from "./SliderActions.Styled";

const SliderActions = (props) => {
  const { setCurrentSlide, currentSlide } = props;

  const nextSlide = () => {
    currentSlide > 2
      ? setCurrentSlide(0)
      : setCurrentSlide((oldState) => (oldState += 1));
  };

  const prevSlide = () => {
    currentSlide === 0
      ? setCurrentSlide(2)
      : setCurrentSlide((oldState) => (oldState -= 1));
  };

  return (
    <StyledSliderActions>
      <button onClick={prevSlide}>
        <img src={images.angleLeft} alt="" />
      </button>
      <button onClick={nextSlide}>
        <img src={images.angleRight} alt="" />
      </button>
    </StyledSliderActions>
  );
};

export default SliderActions;

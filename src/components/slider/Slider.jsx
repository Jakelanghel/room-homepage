import React, { useState } from "react";
import { images } from "../../constants/images";
import { StyledSlider } from "./Slider.Styled";
import SliderActions from "./slider-actions/SliderActions";

const Slider = () => {
  const desktopImages = [
    images.desktopHeroImg1,
    images.desktopHeroImg2,
    images.desktopHeroImg3,
  ];
  const mobileImages = [
    images.mobileHeroImg1,
    images.mobileHeroImg2,
    images.mobileHeroImg3,
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideArr, setSlideArr] = useState(
    window.screen.width > 800 ? desktopImages : mobileImages
  );
  return (
    <StyledSlider>
      <img src={slideArr[currentSlide]} alt="" className="slider-img" />
      <SliderActions />
    </StyledSlider>
  );
};

export default Slider;

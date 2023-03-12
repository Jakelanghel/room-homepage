import React, { useState } from "react";
import { StyledContainerCopy } from "../shared/ContainerCopy";
import { images } from "../../constants/images";
import Slider from "./slider/Slider";
import { StyledHero } from "./Hero.Styled";
import { data } from "../../data/data";

const Hero = () => {
  const desktopImages = data.slideImages.desktop;
  const mobileImages = data.slideImages.mobile;
  const copyArr = data.slideCopy;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideArr, setSlideArr] = useState(
    window.screen.width > 800 ? desktopImages : mobileImages
  );

  return (
    <StyledHero>
      <Slider
        slideArr={slideArr}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
      <StyledContainerCopy className="container-copy">
        <h1>{copyArr[currentSlide].title}</h1>
        <p>{copyArr[currentSlide].body}</p>
        <button className="shop-now-btn">
          shop now <img src={images.arrowIcon} alt="" />
        </button>
      </StyledContainerCopy>
    </StyledHero>
  );
};

export default Hero;

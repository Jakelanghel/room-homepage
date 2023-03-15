import React from "react";
import { StyledAbout } from "./About.Styled";
import { StyledContainerCopy } from "../shared/ContainerCopy";
import { images } from "../../constants/images";
const About = () => {
  return (
    <StyledAbout>
      <div className="container-about-img">
        <img src={images.aboutDarkImg} alt="" />
      </div>

      <StyledContainerCopy className="copy">
        <h2>about our furniture</h2>
        <p>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </StyledContainerCopy>

      <div className="container-about-img">
        <img src={images.aboutLightImg} alt="" />
      </div>
    </StyledAbout>
  );
};

export default About;

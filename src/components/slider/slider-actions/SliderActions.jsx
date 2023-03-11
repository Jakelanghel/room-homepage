import React from "react";
import { images } from "../../../constants/images";
import { StyledSliderActions } from "./SliderActions.Styled";

const SliderActions = () => {
  return (
    <StyledSliderActions>
      <button>
        <img src={images.angleLeft} alt="" />
      </button>
      <button>
        <img src={images.angleRight} alt="" />
      </button>
    </StyledSliderActions>
  );
};

export default SliderActions;

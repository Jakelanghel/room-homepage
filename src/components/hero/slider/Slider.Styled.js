import styled from "styled-components";

export const StyledSlider = styled.div`
  width: 100%;
  position: relative;
  z-index: 0;
  background-color: var(--very-dark-gray);

  .slider-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: 900px) {
    .slider-img {
      object-position: left center;
    }
  }
`;

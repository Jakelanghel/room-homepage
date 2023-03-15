import styled from "styled-components";

export const StyledHero = styled.main`
  width: 100%;

  .shop-now-btn {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.25rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 10px;
    color: var(--black);
    border: none;
    background-color: transparent;
    margin: 3rem 0;

    img {
      height: 10px;
    }
  }

  .shop-now-btn:hover {
    cursor: pointer;
    color: var(--dark-gray);
    filter: invert(19%) sepia(81%) saturate(0%) hue-rotate(250deg)
      brightness(107%) contrast(91%);
  }

  @media screen and (min-width: 900px) {
    display: flex;
    min-height: 70%;

    .slider {
      width: 60%;
    }

    .container-copy {
      width: 40%;
      padding: 8rem 3rem;
    }

    .shop-now-btn {
      margin: 2rem 0;
    }
  }
`;

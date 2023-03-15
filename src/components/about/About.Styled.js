import styled from "styled-components";

export const StyledAbout = styled.div`
  width: 100%;

  .container-about-img {
    width: 100%;
  }

  img {
    width: 100%;
  }

  @media screen and (min-width: 900px) {
    display: flex;
    min-height: 30%;

    .copy {
      width: 45%;
    }

    .container-about-img {
      width: 30%;
      min-height: 100%;
    }

    img {
      min-height: 100%;
      object-fit: cover;
    }
  }
`;

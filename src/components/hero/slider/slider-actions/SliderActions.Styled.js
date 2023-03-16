import styled from "styled-components";

export const StyledSliderActions = styled.div`
  width: 125px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  right: 0;

  background-color: var(--black);

  button {
    border: none;
    background-color: transparent;
    padding: 1rem 1.5rem;
  }

  button:hover {
    cursor: pointer;
    background-color: #444444;
  }

  img {
    width: 9px;
  }

  @media screen and (min-width: 900px) {
    width: 161px;
    right: -161px;

    button {
      padding: 1.5rem 2rem;
    }

    img {
      width: 15px;
    }
  }
`;

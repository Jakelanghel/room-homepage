import styled from "styled-components";

export const StyledContainerCopy = styled.div`
  padding: 3rem 1.5rem;

  h1,
  h2 {
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 2.25rem;
    color: var(--black);
  }

  h2 {
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
  }

  p {
    font-size: 1rem;
    line-height: 1.35rem;
    color: var(--dark-gray);
  }

  button {
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
`;

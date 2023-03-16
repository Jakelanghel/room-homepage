import styled from "styled-components";

export const StyledContainerCopy = styled.div`
  padding: 3rem 1.5rem;
  max-width: 1000px;

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
    max-width: 525px;
    font-size: 1rem;
    line-height: 1.35rem;
    color: var(--dark-gray);
  }

  @media screen and (min-width: 1200px) {
    h1 {
      font-size: 2.75rem;
      max-width: 400px;
    }
    h2 {
      max-width: 525px;
    }

    p {
      font-size: 1.2rem;
      line-height: 1.75rem;
    }
  }
`;

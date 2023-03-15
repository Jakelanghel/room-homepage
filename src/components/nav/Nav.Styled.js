import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  padding: 3rem 2rem;

  .desktop-menu {
    display: none;
  }

  position: fixed;
  z-index: 1;

  .container-logo {
    margin: 0 auto;
  }

  .container-menu {
    /* display: none; */
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--nav-backdrop);
  }

  .container-flex {
    display: flex;
    justify-content: space-between;
    padding: 3rem 2rem;
    background-color: var(--white);
  }

  .container-links {
    display: flex;
    gap: 1.25rem;
  }

  a {
    text-decoration: none;
    font-size: 1rem;
    font-weight: 700;
  }

  img,
  a:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 900px) {
    .menu-icon {
      display: none;
    }

    .container-logo {
      margin: 0;
    }

    .desktop-menu {
      display: flex;
      gap: 2rem;
      margin-left: 5rem;
    }
  }
`;

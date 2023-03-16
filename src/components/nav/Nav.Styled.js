import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 2rem;

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
    gap: 0.5rem;
    justify-content: space-between;
    padding: 2rem 1rem;
    background-color: var(--white);
  }

  .container-links {
    display: flex;
    gap: 1.25rem;
  }

  img,
  a {
    padding: 1rem 0.5rem;
  }

  a {
    text-decoration: none;
    font-size: 1rem;
    font-weight: 700;
    border-bottom: solid 2px transparent;
  }

  a:hover {
    border-bottom: solid 2px var(--white);
  }

  img,
  a:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 900px) {
    .menu-icon {
      display: none;
    }

    .logo {
      width: 75px;
    }

    .container-logo {
      margin: 0;
    }

    .desktop-menu {
      display: flex;
      gap: 2rem;
      margin-left: 5rem;

      a {
        font-size: 1.15rem;
        color: var(--white);
      }
    }
  }

  @media screen and (min-width: 1100px) {
    padding: 2.5rem 3.5rem;
  }
`;

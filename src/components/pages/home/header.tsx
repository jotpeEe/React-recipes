import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LoginIcon from '@mui/icons-material/Login';

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  height: 25vh;
  background-color: var(--green);

  nav {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    min-width: var(--section-width);
    margin: 0 auto;

    a {
      opacity: 0.8;
      padding: 15px;
      margin: 0 20px;

      h5 {
        line-height: 24px;
        position: relative;

        &:before {
          content: '';
          position: absolute;
          width: 100%;
          height: 1px;
          bottom: 0px;
          left: 0;
          background-color: var(--bright-green);
          visibility: hidden;
          transform: scaleX(0);
          transition: all 0.3s ease-in-out;
        }
      }

      &:hover {
        opacity: 1;

        h5:before {
          visibility: visible;
          transform: scaleX(1);
        }
      }

      & > * {
        color: white;
      }
    }

    & > *:last-of-type {
      margin-right: 0;
    }

    @media (max-width: 860px) {
      min-width: 0;
      width: 100%;
    }
  }

  .title-container {
    grid-row: span 3;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    margin: 0 auto;
    min-width: var(--section-width);

    @media (max-width: 800px) {
      min-width: 0px;
      width: 100%;
    }

    & > .title > h3 {
      color: white;
    }

    & > .title > h5 {
      color: #357f73;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <Link to="/">
          <h5>RECIPES</h5>
        </Link>
        <Link to="/">
          <h5>BLOG</h5>
        </Link>
        <Link to="/">
          <LoginIcon />
        </Link>
      </nav>
      <div className="title-container">
        <div className="title">
          <h5>WELCOME</h5>
          <h3>Maciej Klos</h3>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;

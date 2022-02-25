import React from 'react';
import styled from 'styled-components';
import Recipe from '../Home/recipe';
// import GlobalStyle from '../../styles/globalstyle';
// import { ThemeProvider } from '@mui/material/styles';
// import theme from '../../styles/theme';

const StyledHome = styled.div`
  height: 100vh;

  .header {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    height: 25vh;
    background-color: var(--green);

    .navbar {
      display: grid;
      grid-template-columns: 1fr 1fr;

      .nav-right {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
      }
    }

    .title-container {
      grid-row: span 3;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 100%;
      margin: 0 auto;
      min-width: 800px;

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
  }

  .content {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(8, 1fr);
    height: 65vh;
    max-width: 800px;
    margin: 0 auto;

    .recipe-nav {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;

      .buttons {
        display: flex;
        flex-direction: row;
      }
    }

    .first-container {
      grid-row: span 2;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 25px;
      padding: 15px 0;
    }

    .second-container {
      grid-row: 5 / 7;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 25px;
      padding: 15px 0;
    }
  }

  .footer {
    height: 10vh;
    margin-top: auto;
    width: 100%;
    background-color: var(--green);
  }
`;

const Link = styled.a`
  opacity: 0.8;
  padding: 15px;
  margin: 0 20px;

  &:hover {
    opacity: 1;
  }
`;

const Text = styled.h5`
  position: relative;
  margin: 0px;
  color: white;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: -5px;
    left: 0;
    background-color: white;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out;
  }

  ${Link}:hover &, ${Link}:hover &::before {
    visibility: visible;
    transform: scaleX(1);
  }
`;

const Home: React.FC = () => {
  return (
    <StyledHome>
      <div className="header">
        <div className="navbar">
          <div className="nav-left"></div>
          <div className="nav-right">
            <Link href="/" className="link">
              <Text>RESIDENTS</Text>
            </Link>
            <Link href="/" className="link">
              <Text>PARCELS</Text>
            </Link>
            <Link href="/" className="link">
              <Text>KEYS</Text>
            </Link>
            <Link href="/" className="link">
              <Text>AMENTIES</Text>
            </Link>
          </div>
        </div>
        <div className="title-container">
          <div className="title">
            <h5>WELCOME</h5>
            <h3>Maciej Klos</h3>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="recipe-nav">
          <h4>RECIPES</h4>
          <div className="buttons">
            <div className="add">ADD</div>
            <h4 className="view-all">VIEW ALL</h4>
          </div>
        </div>
        <div className="first-container">
          <Recipe />
          <Recipe />
          <Recipe />
          <Recipe />
        </div>
        <div className="recipe-nav">
          <h4>RANDOM RECIPE</h4>
          <h4 className="view-all">LAST ADDED</h4>
        </div>
        <div className="second-container">
          <Recipe />
          <Recipe />
        </div>
      </div>
      <div className="footer"></div>
    </StyledHome>
  );
};

export default Home;

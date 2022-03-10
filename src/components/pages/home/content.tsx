import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Recipe from './recipe';
import Post from './post';
import Button from './button';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 75vh;
  max-width: 800px;
  margin: 0 auto;

  .recipe-nav {
    display: flex;
    padding: 20px 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;

    h4 {
      margin: 0px;
      color: var(--green);
    }

    .buttons {
      display: flex;
      justify-content: center;
      align-items: center;

      & > * {
        margin-right: 15px;

        &:last-of-type {
          margin-right: 0;
        }
      }
    }
  }

  .first-container {
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 860px) {
      flex-wrap: wrap;
    }
  }

  .second-container {
    grid-row: 5 / 7;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 25px;
  }

  @media (max-width: 860px) {
    width: auto;
  }
`;

const Content = () => {
  return (
    <StyledContent>
      <div className="recipe-nav">
        <h4>RECIPES</h4>
        <div className="buttons">
          <Link to="/CreateRecipe/AddTitle">
            <Button text="ADD" />
          </Link>
          <Link to="/CreateRecipe/AddTitle">
            <Button text="VIEW ALL" primary />
          </Link>
        </div>
      </div>
      <div className="first-container">
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
      </div>
      <div className="second-container">
        <Post />
      </div>
    </StyledContent>
  );
};

export default Content;

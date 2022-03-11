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
  max-width: var(--section-width);
  margin: 0 auto;

  .recipe-nav {
    position: relative;
    padding: 20px 0;

    .recipe-title {
      display: inline-block;
      width: 100px;
      padding: 10px 15px;

      :before {
        display: block;
        position: absolute;
        content: '';
        height: 1px;
        background-color: #313131;
        width: 10%;
        bottom: 20px;
        left: 0;
      }

      h5 {
        text-align: center;
      }
    }

    .buttons {
      display: inline-block;
      position: absolute;
      right: 0;
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

  .recipes {
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 860px) {
      flex-wrap: wrap;
    }
  }

  .posts {
    display: inline-block;
    width: 70%;
    vertical-align: top;
  }

  @media (max-width: 860px) {
    width: auto;
  }
`;

const Content = () => {
  return (
    <StyledContent>
      <div className="recipe-nav">
        <div className="recipe-title">
          <h5>RECIPES</h5>
        </div>
        <div className="buttons">
          <Link to="/CreateRecipe/AddTitle">
            <Button text="ADD" />
          </Link>
          <Link to="/CreateRecipe/AddTitle">
            <Button text="VIEW ALL" primary />
          </Link>
        </div>
      </div>
      <div className="recipes">
        <Recipe title="SERNIK Z ROSĄ" />
        <Recipe />
        <Recipe />
        <Recipe />
      </div>
      <div className="posts">
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </StyledContent>
  );
};

export default Content;

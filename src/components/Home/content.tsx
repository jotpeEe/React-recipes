import React from 'react';
import styled from 'styled-components';
import Recipe from './recipe';
import Post from './post';

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
      flex-direction: row;
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
      <div className="second-container">
        <Post />
      </div>
    </StyledContent>
  );
};

export default Content;

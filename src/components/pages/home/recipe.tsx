import React from 'react';
import styled from 'styled-components';
import Rating from '../../material-ui/MRating';

const StyledRecipe = styled.a`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 115px;
  width: 180px;
  border: 1px solid #cdcdcd;
  margin-right: auto;

  .inner {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90%;
    width: 90%;
    background-color: white;
    border: 1px solid #cdcdcd;
    background-image: url(https://picsum.photos/180/115);
    background-position: center;
    transition: all 0.2s ease-in-out;
    z-index: 1000;

    &:hover {
      width: 100%;
      height: 100%;
      border: none;
      background-image: scale(url);
    }

    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 30px;
      width: 120px;
      background-color: white;
      font-size: 10px;
      font-weight: bold;
    }
  }

  .description {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 15px;
    width: 120px;
    background-color: white;
    bottom: -5%;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

type RecipeProps = {
  href?: string | undefined;
  title?: string | undefined;
};

const Recipe: React.FC<RecipeProps> = ({ href = '/', title = 'CHINESE CHICKEN' }) => {
  return (
    <StyledRecipe href={href}>
      <div className="inner">
        <h5 className="title">{title}</h5>
        <div className="description">
          <Rating name="read-only" value={2} size="small" readOnly />
        </div>
      </div>
    </StyledRecipe>
  );
};

export default Recipe;

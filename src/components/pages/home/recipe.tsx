import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Rating from '../../material-ui/MRating';

const StyledRecipe = styled(Link)`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 190px;
  width: 25%;
  border: 1px solid var(--gray);
  margin-right: 30px;

  &:last-of-type {
    margin: 0px;
  }

  .inner {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90%;
    width: 90%;
    background-color: var(--white);
    border: 1px solid var(--gray);
    background-image: url(https://picsum.photos/320/190);
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
      justify-content: center;
      align-items: center;
      font-size: var(--fs-xxs);
      font-weight: bold;
      height: 40px;
      background-color: var(--white);
      padding: 0 15px;
      margin: 0;
    }
  }

  .description {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 20px;
    bottom: -6%;

    & > span {
      position: relative;
      background-color: var(--white);
      width: 100%;
      padding: 2px 15px;
      font-size: 0.8rem;
    }
  }
`;

type RecipeProps = {
  href?: string | undefined;
  title?: string | undefined;
};

const Recipe: React.FC<RecipeProps> = ({ href = '/', title = 'CHINESE CHICKEN' }) => {
  return (
    <StyledRecipe to={href}>
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

import React from 'react';
import styled from 'styled-components';
import ListItemText from '../material/listItemText';
import Accordion from '../material/accordion';
import Paper from '@mui/material/Paper';
import Image from '../../images/cheesecake-g800ed6aef_1920.jpg';
import Image2 from '../../images/cheesecake-g800ed6aef_1920.jpg';

const StyledPaper = styled(Paper)`
  margin: 50px 0px;
  .recipe-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    position: relative;
    height: 100%;
    padding: 0;
    border: 1px solid var(--gray);
    max-width: 800px;
    column-gap: 30px;
  }

  .title,
  .ingredients {
    height: 100%;
    width: auto;
  }

  .title {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Roboto;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 5px;
    padding: 0px;
    margin: 0px;
    width: auto;
  }

  img {
    grid-row: span 3;
    height: 100%;
  }

  .steps p {
    padding-right: 70px;

    &:last-of-type {
      padding-bottom: 50px;
    }
  }
`;

const Recipe = (props: any) => {
  const { title, ingredientsList, description } = props;

  return (
    <StyledPaper elevation={5}>
      <div className="recipe-grid">
        <h1 className="title">{title}</h1>
        <img src={Image2} alt="error"></img>
        <ul className="ingredients">
          {ingredientsList &&
            ingredientsList.map((item: { name: string; quantity: string }, idx: number) => (
              <ListItemText key={idx} primary={item.name} secondary={item.quantity} />
            ))}
        </ul>
        <div className="steps">
          {description &&
            description.map((item: string, idx: number) => (
              <Accordion key={idx} description={item} idx={idx} />
            ))}
        </div>
      </div>
    </StyledPaper>
  );
};

export default Recipe;

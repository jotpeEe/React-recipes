import React from 'react';
import styled from 'styled-components';
import ListItemText from '../material/listItemText';
import Accordion from '../material/accordion';

const StyledRecipe = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: repeat(2, auto);
  position: relative;
  height: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 0;
  border: 1px solid var(--gray);
  max-width: 800px;
  column-gap: 30px;

  &:before {
    content: '';
    position: absolute;
    top: -15px;
    right: -15px;
    height: 30px;
    width: 30px;
    background: white;
    border: 1px solid white;
    border-radius: 100%;
  }

  .title,
  .ingredients {
    height: 100%;
    width: auto;
  }

  .title {
    height: 100px;
    grid-column: span 2;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ul {
    padding: 0px;
    margin: 0px;
    width: auto;
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
    <StyledRecipe>
      <h3 className="title">{title.toUpperCase()}</h3>
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
    </StyledRecipe>
  );
};

export default Recipe;

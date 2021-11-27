import React from 'react';
import styled from 'styled-components';
import { RecipesProps, ItemProps } from './main';

const StyledRecipeList = styled.div`
  grid-column: span 3;
  grid-row: span 6;

  .recipe-list {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;

    .recipe {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      width: 100%;
      height: 100%;
      padding: 10px;
      border: 1px solid hsl(214, 13%, 89%);

      h2 {
        grid-column: span 6;
      }

      ul {
        grid-column: span 6;
        display: grid;
        grid-template-columns: repeat(2, minmax(50px, 150px));
        margin: 0;
        padding: 0;
        list-style: none;
      }

      li {
      }

      p {
        grid-column: span 6;
      }
    }
  }
`;

const RecipeList: React.FC<RecipesProps> = ({ recipes }) => {
  function listIngredients(ingr: ItemProps[]) {
    return ingr.map((item: ItemProps, index: number) => <li key={index}>{item.name}</li>);
  }

  return (
    <StyledRecipeList>
      <div className="recipe-list">
        {recipes &&
          recipes.map((item, idx) => (
            <div className="recipe">
              <h2>title</h2>
              <ul>{listIngredients(item.ingList)}</ul>
              <p>{item.desc}</p>
            </div>
          ))}
      </div>
    </StyledRecipeList>
  );
};

export default RecipeList;

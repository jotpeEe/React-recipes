import React from 'react';
import styled from 'styled-components';
import { RecipesProps, ItemProps } from './main';

const StyledRecipeList = styled.div`
  grid-column: span 3;
  grid-row: span 6;
  height: 100%;

  .title,
  p,
  .ingredients {
    padding: 24px;
  }

  .grid {
    display: grid;
    grid-template-columns: minmax(280px, 1fr) 1fr 1fr;
    grid-template-rows: auto auto auto;
    border: 1px solid var(--gray);
    border-bottom: 6px solid var(--light-green);
    border-right: 6px solid var(--light-green);
    border-radius: 5px;

    .step-1,
    .paragraphs-container {
      grid-column-start: span 2;
      grid-column-end: 4;
      color: var(--black);

      @media (max-width: 1024px) {
        grid-column: span 3;
        grid-column-start: 1;
        grid-column-end: 4;
      }
    }

    .lists-container {
      grid-row: span 2;
      grid-row-start: 2;

      @media (max-width: 1024px) {
        grid-column: span 3;
        grid-row: span 1;
        grid-row-start: 4;
      }
    }

    .paragraphs-container {
      grid-row-start: span 2;
    }

    p {
      @media (max-width: 1024px) {
        font-size: var(--fs-xs);
      }
    }

    .ingredients ul.ingredients-list,
    .devskills ul.devskills-list {
      display: grid;
      grid-template-columns: repeat(2, minmax(50px, 200px));
      column-gap: 5px;
      list-style: none;

      li {
        margin-bottom: 10px;
        position: relative;
        padding-left: 20px;
        font-size: var(--fs-xs);

        :before {
          content: '⊳';
          position: absolute;
          color: var(--orange);
          left: 0;
          font-size: var(--fs-sm);
          line-height: 12px;
        }
      }
    }
    @media (max-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

const RecipeList: React.FC<RecipesProps> = ({ recipes }) => {
  function listIngredients(ingr: ItemProps[]) {
    return ingr.map((item: ItemProps, index: number) => <li key={index}>{item.name}</li>);
  }

  return (
    <StyledRecipeList>
      {recipes &&
        recipes.map((item, idx) => (
          <>
            <div className="grid">
              <h2 className="title">Title</h2>
              <div className="lists-container">
                <div className="ingredients">
                  <h5 className="heading">INGREDIENTS</h5>
                  <ul className="ingredients-list">{listIngredients(item.ingList)}</ul>
                </div>
              </div>
              <p className="step-1">{item.desc}</p>
              <div className="paragraphs-container">
                <p className="step-2">{item.desc}</p>
                <p className="step-3">{item.desc}</p>
              </div>
            </div>
          </>
        ))}
    </StyledRecipeList>
  );
};

export default RecipeList;

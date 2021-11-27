import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import IngEdit from './createRecipe';
import RecipeList from './listRecipes';

export interface RecipesProps {
  recipes: RecipeProps[];
}

export interface RecipeProps {
  ingList: ItemProps[];
  desc: string;
}

export interface ItemProps {
  name: string;
  quantity: string;
}

const StyledView = styled.div`
  grid-column: span 11;
  grid-row: span 11;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  background-color: var(--white);
  color: var(--black);

  > div {
    padding: 50px;
  }
`;

const Main: React.FC = () => {
  const [recipe, setRecipe] = useState({});
  const [recipes, setRecipes] = useState<RecipeProps[]>([]);

  useEffect(() => {
    if (Object.keys(recipe).length === 0) return;
    setRecipes((recipes: any) => [...recipes, recipe]);
  }, [recipe]);
  return (
    <StyledView>
      <IngEdit setRecipe={setRecipe} />
      <RecipeList recipes={recipes} />
    </StyledView>
  );
};

export default Main;

import React, { useEffect, useReducer, useRef } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import styled from 'styled-components';
import sr from 'styles/sr';

import { RecipeProps } from './recipe';
import { recipeReducer } from './reducer';
import initialState from './initialState';
import ProgressBar from './progressBar';

const StyledContainer = styled.div`
  height: 100vh;

  .add-recipe-grid {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    .header-background {
      background-color: var(--green);
    }

    .header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 800px;
      margin: 0 auto;
      min-height: 100px;

      h2,
      p {
        color: var(--white);
      }
    }
  }
`;

export const StateContext = React.createContext<typeof initialState>(initialState);
export const DispatchContext = React.createContext<any>(() => {});

const CreateRecipe: React.FC<CreateRecipeProps> = ({ recipes, setRecipes }) => {
  const [state, dispatch] = useReducer(recipeReducer, initialState);
  const { recipe } = state;
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    sr(targetRef.current);
  }, []);

  return (
    <StyledContainer ref={targetRef}>
      <DispatchContext.Provider value={dispatch}>
        <StateContext.Provider value={state}>
          <div className="add-recipe-grid">
            <div className="header-background">
              <div className="header">
                <h2>Create Recipe</h2>
                <p>{recipe.title}</p>
              </div>
            </div>
            {/* Renders stepOne / stepTwo / stepThree */}
            <Outlet context={{ recipes, setRecipes }} />
            <ProgressBar />
          </div>
        </StateContext.Provider>
      </DispatchContext.Provider>
    </StyledContainer>
  );
};
export default CreateRecipe;

export function useRecipes() {
  return useOutletContext<ContextType>();
}

type CreateRecipeProps = {
  recipes: RecipeProps[];
  setRecipes: React.Dispatch<React.SetStateAction<never[]>>;
};

type ContextType = {
  recipes: RecipeProps[];
  setRecipes: React.Dispatch<React.SetStateAction<RecipeProps[]>>;
};

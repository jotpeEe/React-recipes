import React, { useReducer } from 'react';
import styled from 'styled-components';
import { recipeReducer, initialState } from '../createRecipe/recipeReducer/index';
import { StepOne, StepTwo, StepThree, ProgressBar } from '../createRecipe';

const StyledContainer = styled.div`
  height: 130vh;

  .add-nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 50px;

    .step-info {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }

  .add-recipe-grid {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;

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

  .button {
    padding-right: var(--p-recipe-right);
  }

  .step-number {
    display: flex;
    height: 70px;
    width: 70px;
    font-size: 46px;
    color: var(--light-green);
    justify-content: center;
    align-items: center;
  }

  .inserts {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: center;
    padding: var(--p-recipe);

    div:last-of-type {
      padding-right: 0px;
    }

    @media (max-width: 800px) {
      flex-direction: column;
    }
  }
`;


export type Dispatch = () => void;

export const StateContext = React.createContext<any>('');
export const DispatchContext = React.createContext<any>(() => {});

const CreateRecipe: React.FC = () => {
  const [state, dispatch] = useReducer(recipeReducer, initialState);
  const { step, title } = state;

  const viewStep = (id: number) => {
    switch (id) {
      case 1:
        return <StepTwo dispatch={dispatch} state={state} />;
      case 2:
        return <StepThree dispatch={dispatch} state={state} />;
      default:
        return <StepOne dispatch={dispatch} state={state} />;
    }
  };

  return (
    <StyledContainer>
      <div className="add-recipe-grid">
        <div className="header-background">
          <div className="header">
            <h2>Create Recipe</h2>
            <p>{state.title}</p>
          </div>
        </div>
        {viewStep(state.step)}
      <DispatchContext.Provider value={dispatch}>
        <StateContext.Provider value={state}>
            <ProgressBar step={step} />
          </div>
        </div>
      </div>
        </StateContext.Provider>
      </DispatchContext.Provider>
    </StyledContainer>
  );
};

export default CreateRecipe;

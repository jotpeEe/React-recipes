import React, { useEffect, useReducer, useRef } from 'react';
import styled from 'styled-components';
import sr from '../../styles/sr';

import { recipeReducer, initialState } from '../createRecipe/recipeReducer/index';
import { StepOne, StepTwo, StepThree, ProgressBar } from '../createRecipe';

const StyledContainer = styled.div`
  height: 100vh;

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
`;

export type State = {
  step: number;
  title: string;
  ingredientsList: [
    {
      name: string;
      quantity: string;
    },
  ];
  description: string[];
};

export type Dispatch = () => void;

export const StateContext = React.createContext<any>('');
export const DispatchContext = React.createContext<any>(() => {});

const CreateRecipe: React.FC = () => {
  const [state, dispatch] = useReducer(recipeReducer, initialState);
  const { step, title } = state;
  const targetRef = useRef(null);

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
                <p>{title}</p>
              </div>
            </div>
            {step === 0 ? <StepOne /> : step === 1 ? <StepTwo /> : <StepThree />}
            <ProgressBar step={step} />
          </div>
        </StateContext.Provider>
      </DispatchContext.Provider>
    </StyledContainer>
  );
};

export default CreateRecipe;

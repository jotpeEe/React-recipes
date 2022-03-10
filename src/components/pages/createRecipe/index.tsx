import React, { useEffect, useReducer, useRef } from 'react';
import styled from 'styled-components';
import sr from '../../../styles/sr';

import { recipeReducer } from './reducer';
import initialState from './initialState';
import StepOne from './stepOne';
import StepTwo from './stepTwo';
import StepThree from './stepThree';
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

const CreateRecipe: React.FC = () => {
  const [state, dispatch] = useReducer(recipeReducer, initialState);
  const { step, title } = state;
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

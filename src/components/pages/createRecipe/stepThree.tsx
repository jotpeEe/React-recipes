import React, { useEffect, useRef, useContext } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import sr from '../../../styles/sr';
import { ACTIONS } from './reducer';
import { DispatchContext, StateContext } from '.';
import Recipe from './recipe';

const StyledAddInserts = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-width: 800px;

  .button {
    padding-right: 0px;
  }
`;

const StepThree: React.FC = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const { title, description, ingredientsList } = state;
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    sr(targetRef.current);
  }, []);

  return (
    <StyledAddInserts ref={targetRef}>
      <div className="add-nav">
        <div className="step-info">
          <span className="step-number">3</span>
          <div className="text-cointainer">
            <h2>Preview recipe</h2>
            <p>Please check details then create recipe</p>
          </div>
        </div>
        <div className="button">
          <Button
            onClick={() => dispatch({ type: ACTIONS.SET_STEP, payload: 0 })}
            variant="contained">
            CREATE
          </Button>
        </div>
      </div>
      <Recipe title={title} ingredientsList={ingredientsList} description={description} />
    </StyledAddInserts>
  );
};

export default StepThree;

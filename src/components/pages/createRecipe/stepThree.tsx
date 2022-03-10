import React, { useEffect, useRef, useContext } from 'react';
import styled from 'styled-components';
import sr from '../../../styles/sr';
import { ACTIONS } from './reducer';
import { DispatchContext, StateContext } from '.';
import Recipe from './recipe';
import Title from './title';

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
      <Title
        step={state.step}
        title="Preview recipe"
        subtitle="Please check details then create recipe"
        href="/"
        onClick={() => {
          setRecipes([...recipes, state.recipe]);
          dispatch({ type: ACTIONS.SET_STEP, payload: 0 });
        }}
        btnText="CREATE"
      />
      <Recipe title={title} ingredientsList={ingredientsList} description={description} />
    </StyledAddInserts>
  );
};

export default StepThree;

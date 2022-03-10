import React, { useState, useEffect, useRef, useContext } from 'react';
import styled from 'styled-components';
import sr from '../../../../styles/sr';

import Title from '../title';
import Inserts from './inserts';
import { ACTIONS } from '../reducer';
import { DispatchContext, StateContext } from '..';
import ListItem from '../../../material-ui/MListItem';

const StyledAddInserts = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-width: 800px;

  @media (max-width: 800px) {
    min-width: initial;
    width: 100%;
    font-size: var(--fs-xs);
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 0 var(--p-recipe-right);
  }
`;

const StepOne: React.FC = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const { recipe } = state;

  const targetRef = useRef<HTMLDivElement | null>(null);
  const [title, setTitle] = useState<string>('Recipe title');

  useEffect(() => {
    setTitle(title !== 'Recipe title' ? title : state.recipe.title);
    sr(targetRef.current);
  }, [title, state.recipe.title]);

  return (
    <StyledAddInserts active={state.step === 0} ref={targetRef}>
      <Title
        step={state.step}
        title="Add title & ingredients"
        subtitle="Set title and add ingredients pressing '+' button"
        href="/CreateRecipe/HowToMake"
        onClick={() => {
          dispatch({ type: ACTIONS.SET_TITLE, payload: title });
          dispatch({ type: ACTIONS.SET_STEP, payload: 1 });
        }}
        btnText="NEXT"
      />
      <Inserts title={title} setTitle={setTitle} />
      <ul>
        {recipe.ingredientsList &&
          recipe.ingredientsList.map(
            (item: { id?: number; name?: string; quantity?: string }, idx: number) => (
              <ListItem
                key={idx}
                onClick={() =>
                  dispatch({ type: ACTIONS.DELETE_INGREDIENT, payload: { id: item.id } })
                }
                item={item}
              />
            ),
          )}
      </ul>
    </StyledAddInserts>
  );
};

export default StepOne;

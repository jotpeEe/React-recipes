import React, { useState, useEffect, useRef, useContext } from 'react';
import styled from 'styled-components';
import sr from '../../styles/sr';
import { ACTIONS } from './recipeReducer';
import { DispatchContext, StateContext } from '../pages/createRecipe';

import TextField from '../material/textField';
import ListItem from '../material/listItem';
import Button from '@mui/material/Button';
import IconButton from '../material/iconButton';

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

  .ingredients {
    min-width: 800px;
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: center;
    padding-left: 70px;
    padding-top: 50px;

    div {
    }

    div:last-of-type {
      padding-right: 0px;
    }

    @media (max-width: 800px) {
      flex-direction: column;
      min-width: initial;
      width: 100%;
      font-size: var(--fs-xs);
      padding: var(--p-recipe);
    }
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
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [name, setName] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('');
  const [title, setTitle] = useState<string>('Recipe title');

  useEffect(() => {
    setTitle(title !== 'Recipe title' ? title : state.title);
    sr(targetRef.current);
  }, [state.title, title]);

  return (
    <StyledAddInserts active={state.step === 0} ref={targetRef}>
      <div className="add-nav">
        <div className="step-info">
          <span className="step-number">1</span>
          <div className="text-cointainer">
            <h2>Add title & ingredients</h2>
            <p>Set title and add ingredients pressing '+' button</p>
          </div>
        </div>
        <div className="button">
          <Button
            onClick={() => {
              dispatch({ type: ACTIONS.SET_TITLE, payload: title });
              dispatch({ type: ACTIONS.SET_STEP, payload: 1 });
            }}
            variant="contained">
            NEXT
          </Button>
        </div>
      </div>
      <div className="inserts">
        <TextField
          onChange={(e: { target: { value: string } }) => setTitle(e.target.value)}
          label={'Recipe title'}
          placeholder={state.title ? state.title : title}
        />
      </div>
      <div className="ingredients">
        <TextField
          onChange={(e: { target: { value: string } }) => setName(e.target.value)}
          label="Type of ingredient"
        />
        <TextField
          onChange={(e: { target: { value: string } }) => setQuantity(e.target.value)}
          label="Quantity"
        />
        <IconButton
          onClick={() => {
            if (!name || !quantity) return;
            dispatch({
              type: ACTIONS.ADD_INGREDIENT,
              payload: {
                ingredient: {
                  id: Date.now(),
                  name: name,
                  quantity: quantity,
                },
              },
            });
          }}
        />
      </div>
      <ul className="item-list">
        {state.ingredientsList &&
          state.ingredientsList.map((item: any, idx: number) => (
            <ListItem
              key={idx}
              onClick={() =>
                dispatch({ type: ACTIONS.DELETE_INGREDIENT, payload: { id: item.id } })
              }
              item={item}
          ))}
      </ul>
    </StyledAddInserts>
  );
};

export default AddIngredients;

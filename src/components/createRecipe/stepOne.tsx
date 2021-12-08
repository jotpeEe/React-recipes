import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import sr from '../../styles/sr';
import { ACTIONS } from './recipeReducer';

import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

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

    .MuiButtonBase-root {
      width: 70px;

      @media (max-width: 800px) {
        align-items: center;
        justify-content: center;
      }
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

    li {
      grid-column-start: 1;
      width: 100%;
      border-right: 1px solid var(--gray);
      border-bottom: 6px solid var(--light-green);

      :nth-of-type(even) {
        grid-column-start: 2;
      }
    }
  }
`;

interface AddTitProps {
  dispatch: any;
  state: any;
}

const AddIngredients: React.FC<AddTitProps> = ({ dispatch, state }) => {
  const targetRef = useRef(null);
  const [ingredient, setIngredient] = useState('');
  const [quantity, setQuantity] = useState('');
  const [title, setTitle] = useState('Recipe title');

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
          onChange={e => setTitle(e.target.value)}
          id="standard-basic"
          label={'Recipe title'}
          placeholder={state.title ? state.title : title}
          fullWidth
          variant="standard"
        />
      </div>
      <div className="ingredients">
        <TextField
          onChange={e => setIngredient(e.target.value)}
          id="standard-basic"
          label="Type of ingredient"
          variant="standard"
          fullWidth
        />
        <TextField
          onChange={e => setQuantity(e.target.value)}
          id="standard-basic"
          label="Quantity"
          variant="standard"
          fullWidth
        />
        <Tooltip title="Add">
          <IconButton
            onClick={() => {
              if (!ingredient || !quantity) return;
              dispatch({
                type: ACTIONS.ADD_INGREDIENT,
                payload: {
                  ingredient: {
                    id: Date.now(),
                    name: ingredient,
                    quantity: quantity,
                  },
                },
              });
            }}
            aria-label="add"
            size="small">
            <AddIcon />
          </IconButton>
        </Tooltip>
      </div>
      <ul className="item-list">
        {state.ingredientsList &&
          state.ingredientsList.map((item: any, idx: number) => (
            <ListItem
              key={idx}
              secondaryAction={
                <Tooltip title="delete">
                  <IconButton
                    onClick={() =>
                      dispatch({ type: ACTIONS.DELETE_INGREDIENT, payload: { id: item.id } })
                    }
                    edge="end">
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              }>
              <ListItemIcon>
                <FastfoodIcon />
              </ListItemIcon>
              <ListItemText primary={item.name} secondary={item.quantity} />
            </ListItem>
          ))}
      </ul>
    </StyledAddInserts>
  );
};

export default AddIngredients;

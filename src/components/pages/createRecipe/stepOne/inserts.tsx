import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import { ACTIONS } from '../reducer';
import { DispatchContext, StateContext } from '..';
import MIconButton from 'components/material-ui/MIconButton';
import TextField from 'components/material-ui/MTextField';

const StyledInserts = styled.div`
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
  .ingredients {
    min-width: 800px;
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: center;
    padding-left: 70px;
    padding-top: 50px;

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
`;

const Inserts: React.FC<InsertsProps> = ({ title, setTitle }) => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const { recipe } = state;

  const [name, setName] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('');

  return (
    <StyledInserts>
      <div className="inserts">
        <TextField
          onChange={(e: { target: { value: string } }) => setTitle(e.target.value)}
          label={'Recipe title'}
          placeholder={recipe.title ? recipe.title : title}
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
        <MIconButton
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
    </StyledInserts>
  );
};

export default Inserts;

type InsertsProps = {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
};

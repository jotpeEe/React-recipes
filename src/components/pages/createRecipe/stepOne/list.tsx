import React, { useContext } from 'react';
import styled from 'styled-components';

import { DispatchContext, StateContext } from '..';
import { ACTIONS } from '../reducer';
import ListItem from 'components/material-ui/MListItem';

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0 var(--p-recipe-right);
`;

const IngredientsList: React.FC = () => {
  const state = useContext(StateContext);
  const { ingredientsList } = state.recipe;
  const dispatch = useContext(DispatchContext);

  return (
    <StyledList>
      {ingredientsList &&
        ingredientsList.map(
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
    </StyledList>
  );
};

export default IngredientsList;

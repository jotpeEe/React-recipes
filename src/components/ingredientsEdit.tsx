import React, { useState } from 'react';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Grid from '@mui/material/Grid';
import ListItemText from '@mui/material/ListItemText';

interface ItemProps {
  name: string;
  quantity: string;
}

const StyledIngEdit = styled.div`
  grid-column: span 3;
  grid-row: span 3;
  max-width: 100%;

  h2 {
    color: var(--black);
    margin: 0;
  }

  .ingredients-list {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    max-height: 3fr;
  }

  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      width: 33%;
    }
  }
`;

const IngEdit: React.FC = () => {
  const [ingredient, setIngredient] = useState('');
  const [quantity, setQuantity] = useState('');
  const [ingredientsList, setIngredientsList] = useState<ItemProps[]>([]);

  const addItem = () => {
    setIngredientsList([
      ...ingredientsList,
      {
        name: ingredient,
        quantity: quantity,
      },
    ]);
  };

  return (
    <StyledIngEdit>
      <div className="top-container">
        <h2 className="title">Ingredients</h2>
      </div>
      <div className="ingredients-list">
        <TextField
          onChange={e => setIngredient(e.target.value)}
          id="standard-basic"
          label="Type of ingredient"
          variant="standard"
        />
        <TextField
          onChange={e => setQuantity(e.target.value)}
          id="standard-textarea"
          label="Add quantity"
          variant="standard"
        />
        <div className="button">
          <IconButton onClick={addItem} aria-label="add" size="small">
            <AddIcon />
          </IconButton>
        </div>
      </div>
      <div className="grid-container">
        <Grid className="items-grid" item xs={12} md={12}>
          <List dense={true}>
            {ingredientsList.map((item, idx) => (
              <ListItem key={idx}>
                <ListItemIcon>
                  <FastfoodIcon />
                </ListItemIcon>
                <ListItemText primary={item.name} secondary={item.quantity} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </div>{' '}
    </StyledIngEdit>
  );
};

export default IngEdit;

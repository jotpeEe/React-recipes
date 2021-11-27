import React, { useState } from 'react';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

interface CreateRecipeProps {
  setRecipe: (arg: object) => void;
}

interface ItemProps {
  name: string;
  quantity: string;
}

const StyledDescription = styled.div`
  grid-column: span 3;
  grid-row-start: 4;
  grid-row-end: 7;

  .button-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 30px;
  }
`;

const StyledCreateRecipe = styled.div`
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
      border-right: 1px solid var(--gray);
      border-bottom: 6px solid var(--light-green);
    }
  }
`;

const CreateRecipe: React.FC<CreateRecipeProps> = ({ setRecipe }) => {
  const [ingredient, setIngredient] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');
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

  const removeItem = (id: number) => {
    const newItems = [...ingredientsList].filter((item, idx) => {
      return idx !== id;
    });
    setIngredientsList(newItems);
  };

  const createRecipe = () => {
    setRecipe({
      ingList: ingredientsList,
      desc: description,
    });
  };

  return (
    <>
      <StyledDescription>
        <TextField
          onChange={e => setDescription(e.target.value)}
          id="outlined-multiline-static"
          label="Tell us how you made it"
          multiline
          rows={12}
          defaultValue="Default Value"
          fullWidth
        />
        <div className="button-container">
          <Button onClick={createRecipe} variant="contained" size="medium">
            Add recipe
          </Button>
        </div>
      </StyledDescription>
      <StyledCreateRecipe>
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
            <Tooltip title="Add">
              <IconButton onClick={addItem} aria-label="add" size="small">
                <AddIcon />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <div className="grid-container">
          <Grid className="items-grid" item xs={12} md={12}>
            <List dense={true}>
              {ingredientsList.map((item, idx) => (
                <ListItem
                  key={idx}
                  secondaryAction={
                    <Tooltip title="delete">
                      <IconButton onClick={() => removeItem(idx)} edge="end">
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
            </List>
          </Grid>
        </div>{' '}
      </StyledCreateRecipe>
    </>
  );
};

export default CreateRecipe;

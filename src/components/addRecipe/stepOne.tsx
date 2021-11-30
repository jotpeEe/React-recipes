import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import sr from '../../styles/sr';

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
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';

const StyledAddInserts = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-width: 800px;

  .ingredients {
    width: 100%;
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
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 0 34px 0px 70px;

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
  setStep: (arg: number) => void;
  setRecipe: (arg: object) => void;
  step: number;
}
interface ItemProps {
  name: string;
  quantity: string;
}

const AddIngredients: React.FC<AddTitProps> = ({ setStep, step, setRecipe }) => {
  const targetRef = useRef(null);
  const [ingredient, setIngredient] = useState('');
  const [quantity, setQuantity] = useState('');
  const [ingredientsList, setIngredientsList] = useState<ItemProps[]>([]);

  const addItem = () => {
    if (ingredient === '' || quantity === '') return;
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
    if (ingredientsList.length === 0) return setStep(1);
    setRecipe({
      ingList: ingredientsList,
    });
    setStep(1);
  };

  useEffect(() => {
    sr(targetRef.current);
  }, [ingredientsList]);
  return (
    <StyledAddInserts active={step === 0}>
    <StyledAddInserts active={step === 0} ref={targetRef}>
      <div className="add-nav">
        <div className="step-info">
          <span className="step-number">1</span>
          <div className="text-cointainer">
            <h2>Add identifiers</h2>
            <p>Select category and add title</p>
          </div>
        </div>
        <div className="button">
          <ThemeProvider theme={theme}>
            <Button onClick={createRecipe} variant="contained">
              NEXT
            </Button>
          </ThemeProvider>
        </div>
      </div>
      <div className="inserts">
        <FormControl fullWidth variant="standard">
          <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            label="Category">
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <TextField id="standard-basic" label="Recipe name" fullWidth variant="standard" />
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
          <IconButton onClick={addItem} aria-label="add" size="small">
            <AddIcon />
          </IconButton>
        </Tooltip>
      </div>
      <ul className="item-list">
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
      </ul>
    </StyledAddInserts>
  );
};

export default AddIngredients;

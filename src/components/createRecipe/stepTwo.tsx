import React, { useEffect, useState, useRef, useContext } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import sr from '../../styles/sr';
import { ACTIONS } from './recipeReducer';
import { DispatchContext, StateContext } from '../pages/createRecipe';

const StyledAddInserts = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-width: 800px;

  .step-form {
    display: flex;
    align-items: center;
    width: 200px;
  }

  .MuiTextField-root {
    padding: var(--p-recipe);
  }

  .MuiInputLabel-root {
    padding: var(--p-recipe);
  }
`;

interface AddIngredientsProps {
  dispatch: any;
  state: any;
}

const AddIngredients: React.FC = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const targetRef = useRef(null);
  const [input1, setInput1] = useState<string>('');
  const [input2, setInput2] = useState<string>('');
  const [input3, setInput3] = useState<string>('');
  const [input4, setInput4] = useState<string>('');
  const [description, setDescription] = useState<string[]>([]);

  useEffect(() => {
    sr(targetRef.current);
    setDescription([
      input1 ? input1 : state.description[0],
      input2 ? input2 : state.description[1],
      input3 ? input3 : state.description[2],
      input4 ? input4 : state.description[3],
    ]);
  }, [input1, input2, input3, input4, state.description]);

  const handleClick = () => {
    dispatch({ type: ACTIONS.ADD_DESCRIPTION, payload: { description: description } });
    dispatch({ type: ACTIONS.SET_STEP, payload: 2 });
  };

  return (
    <StyledAddInserts ref={targetRef}>
      <div className="add-nav">
        <div className="step-info">
          <span className="step-number">2</span>
          <div className="text-cointainer">
            <h2>How to make it</h2>
            <p>Please describe in few setps how to make the dish</p>
          </div>
        </div>
        <div className="step-form"></div>
        <div className="button">
          <Button onClick={handleClick} variant="contained">
            NEXT
          </Button>
        </div>
      </div>
      <TextField
        id="standard-multiline-static"
        multiline
        rows={4}
        variant="standard"
        label="Step 1"
        placeholder={state.description[0] ? state.description[0] : input1}
        onChange={e => setInput1(e.target.value)}
      />
      <TextField
        id="standard-multiline-static"
        multiline
        rows={4}
        variant="standard"
        label="Step 2"
        placeholder={state.description[1] ? state.description[1] : input2}
        onChange={e => setInput2(e.target.value)}
      />
      <TextField
        id="standard-multiline-static"
        multiline
        rows={4}
        variant="standard"
        label="Step 3"
        placeholder={state.description[2] ? state.description[2] : input3}
        onChange={e => setInput3(e.target.value)}
      />
      <TextField
        id="standard-multiline-static"
        multiline
        rows={4}
        variant="standard"
        placeholder={state.description[3] ? state.description[3] : input4}
        onChange={e => setInput4(e.target.value)}
      />
    </StyledAddInserts>
  );
};

export default AddIngredients;

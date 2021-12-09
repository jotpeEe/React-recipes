import React, { useEffect, useState, useRef, useContext } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import TextFieldMultiline from '../material/textFieldMultiline';
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
`;

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
      <TextFieldMultiline
        onChange={(e: { target: { value: string } }) => setInput1(e.target.value)}
        defaultValue={state.description[0] ? state.description[0] : input1}
        label="Step 1"
      />
      <TextFieldMultiline
        defaultValue={state.description[1] ? state.description[1] : input2}
        onChange={(e: { target: { value: string } }) => setInput2(e.target.value)}
        label="Step 2"
      />
      <TextFieldMultiline
        defaultValue={state.description[2] ? state.description[2] : input3}
        onChange={(e: { target: { value: string } }) => setInput3(e.target.value)}
        label="Step3"
      />
      <TextFieldMultiline
        label="Step4"
        defaultValue={state.description[3] ? state.description[3] : input4}
        onChange={(e: { target: { value: string } }) => setInput4(e.target.value)}
      />
    </StyledAddInserts>
  );
};

export default AddIngredients;

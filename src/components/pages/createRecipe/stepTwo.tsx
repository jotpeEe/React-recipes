import React, { useEffect, useState, useRef, useContext } from 'react';
import styled from 'styled-components';

import Title from './title';
import MTextFieldMultiline from 'components/material-ui/MTextFieldMultiline';
import sr from 'styles/sr';
import { ACTIONS } from './reducer';
import { DispatchContext, StateContext } from '.';

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
  const { recipe } = state;
  const targetRef = useRef(null);
  const [input1, setInput1] = useState<string>('');
  const [input2, setInput2] = useState<string>('');
  const [input3, setInput3] = useState<string>('');
  const [input4, setInput4] = useState<string>('');
  const [description, setDescription] = useState<string[]>([]);

  useEffect(() => {
    // animation on re-render
    sr(targetRef.current);
    // updates description array only if there's new input
    setDescription([
      input1 ? input1 : recipe.description[0],
      input2 ? input2 : recipe.description[1],
      input3 ? input3 : recipe.description[2],
      input4 ? input4 : recipe.description[3],
    ]);
  }, [input1, input2, input3, input4, recipe.description]);

  return (
    <StyledAddInserts ref={targetRef}>
      <Title
        step={state.step}
        title="How to make it"
        subtitle="Please describe in few setps how to make the dish"
        href="/CreateRecipe/RecipePreview"
        onClick={() => {
          dispatch({ type: ACTIONS.ADD_DESCRIPTION, payload: { description: description } });
          dispatch({ type: ACTIONS.SET_STEP, payload: 2 });
        }}
        btnText="NEXT"
      />
      <MTextFieldMultiline
        onChange={(e: { target: { value: string } }) => setInput1(e.target.value)}
        defaultValue={recipe.description[0] ? recipe.description[0] : input1}
        label="Step 1"
      />
      <MTextFieldMultiline
        defaultValue={recipe.description[1] ? recipe.description[1] : input2}
        onChange={(e: { target: { value: string } }) => setInput2(e.target.value)}
        label="Step 2"
      />
      <MTextFieldMultiline
        defaultValue={recipe.description[2] ? recipe.description[2] : input3}
        onChange={(e: { target: { value: string } }) => setInput3(e.target.value)}
        label="Step3"
      />
      <MTextFieldMultiline
        label="Step4"
        defaultValue={recipe.description[3] ? recipe.description[3] : input4}
        onChange={(e: { target: { value: string } }) => setInput4(e.target.value)}
      />
    </StyledAddInserts>
  );
};

export default AddIngredients;

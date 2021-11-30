import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import TextInput from './textinput';
import sr from '../../styles/sr';

const StyledAddInserts = styled.div<{ active: boolean }>`
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
    padding: 0 var(--p-recipe);
  }

  .MuiInputLabel-root {
    left: initial;
  }
`;

interface AddIngredientsProps {
  setStep: (arg: number) => void;
  setRecipe: (arg: object) => void;
  step: number;
  recipe: object;
}

const AddIngredients: React.FC<AddIngredientsProps> = ({ setStep, step, setRecipe, recipe }) => {
  const targetRef = useRef(null);
  const [description, setDescription] = useState<string[]>([]);

  const createRecipe = () => {
    if (description === []) return setStep(2);
    setRecipe({
      ...recipe,
      desc: description,
    });
    console.log(recipe);
    setStep(2);
  };

  useEffect(() => {
    sr(targetRef.current);
  }, []);

  return (
    <StyledAddInserts active={step === 1} ref={targetRef}>
      <div className="add-nav">
        <div className="step-info">
          <span className="step-number">2</span>
          <div className="text-cointainer">
            <h2>Add ingredients</h2>
            <p>Provide name and quantity of an ingredient</p>
          </div>
        </div>
        <div className="step-form"></div>
        <div className="button">
          <Button onClick={createRecipe} variant="contained">
            NEXT
          </Button>
        </div>
      </div>
      <TextInput step={step} description={description} setDescription={setDescription} />
    </StyledAddInserts>
  );
};

export default AddIngredients;

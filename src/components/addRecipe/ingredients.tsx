import React from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const StyledAddInserts = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-width: 800px;

  .add-nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 50px;

    .step-info {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }

  .inserts {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: center;
    padding-left: 70px;
    padding-top: 50px;

    div {
      padding-right: 30px;
    }

    div:last-of-type {
      padding-right: 0px;
    }
  }

  .step-number {
    display: flex;
    height: 70px;
    width: 70px;
    font-size: 46px;
    color: var(--light-green);
    justify-content: center;
    align-items: center;
  }

  .button {
    display: flex;
    justify-content: end;
    padding-top: 100px;
  }
`;

const StyledButton = styled(Button)`
  background-color: var(--light-green);
`;

interface AddIngredientsProps {
  setStep: (arg: number) => void;
  step: number;
}

const addIngredients: React.FC<AddIngredientsProps> = ({ setStep, step }) => {
  return (
    <StyledAddInserts active={step === 1}>
      <div className="add-nav">
        <div className="step-info">
          <span className="step-number">1</span>
          <div className="text-cointainer">
            <h2>Add identifiers</h2>
            <p>Select category and add title</p>
          </div>
        </div>
      </div>
      <div className="inserts">
        <TextField id="standard-basic" label="Type of ingredient" variant="standard" />
        <TextField id="standard-basic" label="Quantity" variant="standard" />
      </div>
      <div className="button">
        <StyledButton onClick={() => setStep(2)} variant="contained">
          NEXT -&gt;
        </StyledButton>
      </div>
    </StyledAddInserts>
  );
};

export default addIngredients;

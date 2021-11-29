import React from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const StyledAddInserts = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-width: 800px;
`;

interface FinishProps {
  setStep: (arg: number) => void;
  step: number;
}

const Finish: React.FC<FinishProps> = ({ setStep }) => {
  return (
    <StyledAddInserts>
      <div className="add-nav">
        <div className="step-info">
          <span className="step-number">3</span>
          <div className="text-cointainer">
            <h2>Preview recipe</h2>
            <p>Please check details then create recipe</p>
          </div>
        </div>
        <div className="button">
          <Button onClick={() => setStep(0)} variant="contained">
            NEXT
          </Button>
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
        <TextField fullWidth id="standard-basic" label="Recipe name" variant="standard" />
      </div>
    </StyledAddInserts>
  );
};

export default Finish;

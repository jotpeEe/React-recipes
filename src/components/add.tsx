import React from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const StyledContainer = styled.div`
  height: 100vh;

  .add-grid {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;

    .add-header {
      background-color: var(--green);
    }

    .add-header-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 800px;
      margin: 0 auto;
      min-height: 100px;

      h1,
      p {
        color: var(--white);
      }
    }

    .add-inserts {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      min-width: 800px;

      .add-nav {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding-top: 100px;

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
  }
`;

const StyledFormControl = styled(FormControl)`
  width: 100%;
`;

const StyledTextField = styled(TextField)`
  width: 100%;
`;

const StyledButton = styled(Button)`
  background-color: var(--light-green);
`;

const Add: React.FC = () => {
  return (
    <StyledContainer>
      <div className="add-grid">
        <div className="add-header">
          <div className="add-header-container">
            <h1 className="header-p">Creating recipe</h1>
          </div>
        </div>
        <div className="add-inserts">
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
            <StyledFormControl variant="standard">
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
            </StyledFormControl>
            <StyledTextField id="standard-basic" label="Recipe name" variant="standard" />
          </div>
          <div className="button">
            <StyledButton variant="contained">NEXT -&gt;</StyledButton>
          </div>
        </div>
        <div className="add-slider"></div>
      </div>
    </StyledContainer>
  );
};

export default Add;

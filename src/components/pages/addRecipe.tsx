import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AddIngredients from '../addRecipe/ingredients';
import AddTit from '../addRecipe/title';
import FinishRecipe from '../addRecipe/finish';

const StyledContainer = styled.div<{ active: boolean }>`
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

const Add: React.FC = () => {
  const [step, setStep] = useState(0);

  const viewStep = (id: number) => {
    switch (id) {
      case 0:
        return <AddTit step={step} setStep={setStep} />;
      case 1:
        return <AddIngredients step={step} setStep={setStep} />;
      case 2:
        return <FinishRecipe step={step} setStep={setStep} />;
      default:
        return <AddTit step={step} setStep={setStep} />;
    }
  };

  console.log('render');
  useEffect(() => {
    console.log(step);
  }, [step]);
  return (
    <StyledContainer active={step === 0}>
      <div className="add-grid">
        <div className="add-header">
          <div className="add-header-container">
            <h1 className="header-p">Creating recipe</h1>
          </div>
        </div>
        {viewStep(step)}
        <div className="add-slider"></div>
      </div>
    </StyledContainer>
  );
};

export default Add;

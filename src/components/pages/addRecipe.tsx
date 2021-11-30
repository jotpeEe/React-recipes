import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import sr from '../../styles/sr';

import StepTwo from '../addRecipe/stepTwo';
import StepOne from '../addRecipe/stepOne';
import StepThree from '../addRecipe/stepThree';
export interface RecipesProps {
  recipes: RecipeProps[];
}

export interface RecipeProps {
  ingList: ItemProps[];
  desc: string;
}

export interface ItemProps {
  name: string;
  quantity: string;
}

  height: 100vh;

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

      h2,
      p {
        color: var(--white);
      }
    }
  }

  .add-slider {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 10%;
  }

  .button {
    padding-right: var(--p-recipe);
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

  .inserts {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: center;
    padding: 50px var(--p-recipe) 0px var(--p-recipe);

    div:last-of-type {
      padding-right: 0px;
    }
  }
`;



const Add: React.FC = () => {
  const targetRef = useRef(null);
  const [step, setStep] = useState(0);
  const [recipe, setRecipe] = useState({});
  const [recipes, setRecipes] = useState<RecipeProps[]>([]);

  useEffect(() => {
    sr(targetRef.current);
    if (Object.keys(recipe).length === 0) return;
    setRecipes((recipes: any) => [...recipes, recipe]);
  }, [recipe, step]);

  const viewStep = (id: number) => {
    switch (id) {
      case 1:
        return <StepTwo step={step} setStep={setStep} setRecipe={setRecipe} />;
      case 2:
        return <StepThree step={step} setStep={setStep} />;
      default:
        return <StepOne step={step} setStep={setStep} setRecipe={setRecipe} />;
    }
  };

  return (
    <StyledContainer active={step === 0}>
      <div className="add-grid">
        <div className="add-header">
          <div className="add-header-container">
            <h1 className="header-p">Add recipe</h1>
          </div>
        </div>
        {viewStep(step)}
        <div className="add-slider">
          <div className="slider" />
        </div>
      </div>
    </StyledContainer>
  );
};

export default Add;

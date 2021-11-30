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

const StyledContainer = styled.div<{ activeStep: number }>`
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top: 1px solid var(--gray);
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 10vh;
    background-color: var(--dark-white2);

    .slider-text {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      min-width: 335px;
      padding-top: 10px;
    }
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

  .slider {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 300px;
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    overflow: hidden;
  }
`;

const ListItem = styled.li<{ active: boolean }>`
  background-color: ${props => (props.active ? 'var(--light-green)' : 'var(--white)')};
  border: 2px solid var(--gray);
  border-radius: 100px;
  min-width: 12px;
  height: 12px;
  position: relative;
`;

const Divider = styled.div<{ active: boolean }>`
  width: 100%;
  margin: 0px 7px;
  position: relative;

  :after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 5px;
    background-color: ${props => (props.active ? 'var(--light-green)' : 'var(--gray)')};
    height: 2px;
    z-index: 0;
    width: 100%;
  }
`;

const SliderText = styled.p<{ active: boolean }>`
  color: ${props => (props.active ? 'var(--black)' : 'var(--gray)')};
  padding: 0px;
  margin: 0;
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
        return <StepTwo step={step} setStep={setStep} setRecipe={setRecipe} recipe={recipe} />;
      case 2:
        return <StepThree step={step} setStep={setStep} />;
      default:
        return <StepOne step={step} setStep={setStep} setRecipe={setRecipe} />;
    }
  };

  return (
    <StyledContainer activeStep={step}>
      <div className="add-grid">
        <div className="add-header">
          <div className="add-header-container">
            <h2>Create Recipe</h2>
          </div>
        </div>
        {viewStep(step)}
        <div className="add-slider">
          <ul className="slider">
            <ListItem active={true} />
            <Divider active={step === 0 ? false : true} />
            <ListItem active={step === 0 ? false : step === 1 ? true : true} />
            <Divider active={step === 0 ? false : step === 1 ? false : true} />
            <ListItem active={step === 0 ? false : step === 1 ? false : true} />
          </ul>
          <div className="slider-text">
            <SliderText active={true}>Add Title</SliderText>
            <SliderText active={step === 0 ? false : step === 1 ? true : true}>
              How to make
            </SliderText>
            <SliderText active={step === 0 ? false : step === 1 ? false : true}>Preview</SliderText>
          </div>
        </div>
      </div>
    </StyledContainer>
  );
};

export default Add;

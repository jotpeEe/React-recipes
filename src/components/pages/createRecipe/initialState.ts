import { RecipeProps } from './recipe';

export type initialStateProps = {
  step: number;
  recipe: RecipeProps;
};

const initialState: initialStateProps = {
  step: 0,
  recipe: {
    title: '',
    ingredientsList: [],
    description: [],
  },
};

export default initialState;

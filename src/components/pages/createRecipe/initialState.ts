type initialStateProps = {
  step: number;
  title: string;
  ingredientsList: object[];
  description: string[];
};

const initialState: initialStateProps = {
  step: 0,
  title: '',
  ingredientsList: [],
  description: [],
};

export default initialState;

import { ACTIONS } from '.';

const recipeReducer = (state: any, action: any) => {
  switch (action.type) {
    case ACTIONS.ADD_INGREDIENT:
      return {
        ...state,
        ingredientsList: [...state.ingredientsList, action.payload.ingredient],
      };
    case ACTIONS.EDIT_INGREDIENT:
      return {
        ...state,
        ingredientsList: [
          ...state.ingredientsList.splice(action.payload.idx, 1, action.payload.ingredient),
        ],
      };
    case ACTIONS.DELETE_INGREDIENT:
      return {
        ...state,
        ingredientsList: [
          ...state.ingredientsList.filter((item: any) => item.id !== action.payload.id),
        ],
      };
    case ACTIONS.SET_STEP:
      return {
        ...state,
        step: action.payload,
      };
    case ACTIONS.SET_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    case ACTIONS.ADD_DESCRIPTION:
      return {
        ...state,
        description: action.payload.description,
      };
    default:
      return state;
  }
};

export default recipeReducer;

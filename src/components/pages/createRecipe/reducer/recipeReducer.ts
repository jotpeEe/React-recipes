import { ACTIONS } from '.';
import { initialStateProps } from '../initialState';

const recipeReducer = (state: initialStateProps, action: any) => {
  switch (action.type) {
    case ACTIONS.ADD_INGREDIENT:
      return {
        ...state,
        recipe: {
          ...state.recipe,
          ingredientsList: [...state.recipe.ingredientsList, action.payload.ingredient],
        },
      };

    case ACTIONS.EDIT_INGREDIENT:
      return {
        ...state,
        recipe: {
          ...state.recipe,
          ingredientsList: [
            ...state.recipe.ingredientsList.splice(
              action.payload.idx,
              1,
              action.payload.ingredient,
            ),
          ],
        },
      };

    case ACTIONS.DELETE_INGREDIENT:
      return {
        ...state,
        recipe: {
          ...state.recipe,
          ingredientsList: [
            ...state.recipe.ingredientsList.filter((item: any) => item.id !== action.payload.id),
          ],
        },
      };

    case ACTIONS.SET_STEP:
      return {
        ...state,
        step: action.payload,
      };

    case ACTIONS.SET_TITLE:
      return {
        ...state,
        state: {
          ...state.recipe,
          title: action.payload,
        },
      };

    case ACTIONS.ADD_DESCRIPTION:
      return {
        ...state,
        recipe: {
          ...state.recipe,
          description: action.payload.description,
        },
      };

    default:
      return state;
  }
};

export default recipeReducer;

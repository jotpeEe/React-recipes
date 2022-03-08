type ActionsProps = {
  ADD_INGREDIENT: string;
  EDIT_INGREDIENT: string;
  ADD_DESCRIPTION: string;
  DELETE_INGREDIENT: string;
  SET_TITLE: string;
  SET_STEP: string;
};

export const ACTIONS: ActionsProps = {
  ADD_INGREDIENT: 'add-ingredient',
  ADD_DESCRIPTION: 'add-description',
  EDIT_INGREDIENT: 'edit-ingredient',
  DELETE_INGREDIENT: 'delete-ingredient',
  SET_TITLE: 'set-title',
  SET_STEP: 'set-step',
};

export default ACTIONS;

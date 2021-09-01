import { SET_DIALOG } from "../../constans/messagesConstans/dialogContans";

const initialState = {
  dialog: null,
};
const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DIALOG:
      return { ...state, dialog: action.dialog };

    default:
      return state;
  }
};

export default dialogReducer;

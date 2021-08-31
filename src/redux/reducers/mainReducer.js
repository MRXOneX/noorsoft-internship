import { SET_VISIBLE_POPUP } from "../constans/mainConstans";

const initialState = {
  visiblePopup: false,
};
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBLE_POPUP:
      return { ...state, visiblePopup: action.payload };

    default:
      return state;
  }
};
export default mainReducer;

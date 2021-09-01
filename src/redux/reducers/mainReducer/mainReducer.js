import {
  SET_ACTIVE_INPUT_SEARCH,
  SET_INPUT_VALUE_SEARCH,
  SET_VISIBLE_POPUP,
} from "../../constans/mainConstans/mainConstans";

const initialState = {
  visiblePopup: false,
  activeInputSearch: false,
  inputValueSearch: "",
};
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBLE_POPUP:
      return { ...state, visiblePopup: action.payload };

    case SET_ACTIVE_INPUT_SEARCH:
      return { ...state, activeInputSearch: action.payload };

    case SET_INPUT_VALUE_SEARCH:
      return { ...state, inputValueSearch: action.payload };

    default:
      return state;
  }
};
export default mainReducer;

import {
  FETCH_FORGOTPASSWORD_FAILURE,
  FETCH_FORGOTPASSWORD_REQUEST,
  FETCH_FORGOTPASSWORD_SUCCESS,
} from "../../constans/authorizationConstans/forgotPasswordConstans";

const initialState = {
  forgotPasswordLoading: false,
  forgotPasswordSuccess: false,
  forgotPasswordError: null,
};

const forgotPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FORGOTPASSWORD_REQUEST:
      return { ...state, forgotPasswordLoading: true };
    case FETCH_FORGOTPASSWORD_SUCCESS:
      return { ...state, forgotPasswordSuccess: true };
    case FETCH_FORGOTPASSWORD_FAILURE:
      return { ...state, forgotPasswordError: action.error };
    default:
      return state;
  }
};

export default forgotPasswordReducer;

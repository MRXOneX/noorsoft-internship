import { SET_USER } from "../../constans/authorizationConstans/authConstans";
import {
  FETCH_OUT_FAILURE,
  FETCH_OUT_REQUEST,
  FETCH_OUT_SUCCESS,
} from "../../constans/authorizationConstans/signOutConstans";

const initialState = {
  user: null,
  signOutLoading: false,
  signOutSuccess: false,
  signOutError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.user };

    case FETCH_OUT_REQUEST:
      return { ...state, signOutLoading: true };
    case FETCH_OUT_SUCCESS:
      return { ...state, signOutSuccess: true };
    case FETCH_OUT_FAILURE:
      return { ...state, signOutError: action.error };

    default:
      return state;
  }
};
export default authReducer;

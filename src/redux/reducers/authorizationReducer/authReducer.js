import { SET_USER } from "../../constans/authorizationConstans/authConstans";
import {
  FETCH_OUT_FAILURE,
  FETCH_OUT_REQUEST,
  FETCH_OUT_SUCCESS,
} from "../../constans/authorizationConstans/signOutConstans";

const initialState = {
  user: null,
  signOut: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.user };

    case FETCH_OUT_REQUEST:
      return { ...state, signOut: "запрос" };
    case FETCH_OUT_SUCCESS:
      return { ...state, signOut: "успешно" };
    case FETCH_OUT_FAILURE:
      return { ...state, signOut: action.error };

    default:
      return state;
  }
};
export default authReducer;

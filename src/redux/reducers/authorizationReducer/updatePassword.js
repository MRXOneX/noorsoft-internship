import {
  FETCH_UPDATEPASSWORD_FAILURE,
  FETCH_UPDATEPASSWORD_REQUEST,
  FETCH_UPDATEPASSWORD_SUCCESS,
} from "../../constans/authorizationConstans/updatePasswordConstans";

const initialState = {
  updatePasswordLoading: false,
  updatePasswordSuccess: false,
  updatePasswordError: null,
};
const updatePassword = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_UPDATEPASSWORD_REQUEST:
      return { ...state, updatePasswordLoading: true };
    case FETCH_UPDATEPASSWORD_SUCCESS:
      return { ...state, updatePasswordSuccess: true };
    case FETCH_UPDATEPASSWORD_FAILURE:
      return { ...state, updatePasswordError: action.error };
    default:
      return state;
  }
};
export default updatePassword;

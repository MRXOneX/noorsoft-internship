import {
  FETCH_REGISTRATION_FAILURE,
  FETCH_REGISTRATION_REQUEST,
  FETCH_REGISTRATION_SUCCESS,
} from "../../constans/authorizationConstans/registrationConstans";

const initialState = {
  registrationLoading: false,
  registrationSuccess: false,
  registrationError: null,
};
const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REGISTRATION_REQUEST:
      return { ...state, registrationLoading: true };
    case FETCH_REGISTRATION_SUCCESS:
      return { ...state, registrationSuccess: true };
    case FETCH_REGISTRATION_FAILURE:
      return { ...state, registrationError: action.error };
    default:
      return state;
  }
};

export default registrationReducer;

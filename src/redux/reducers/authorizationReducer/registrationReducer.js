import {
  FETCH_REGISTRATION_FAILURE,
  FETCH_REGISTRATION_REQUEST,
  FETCH_REGISTRATION_SUCCESS,
} from "../../constans/authorizationConstans/registrationConstans";

const initialState = {
  registration: null,
};
const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REGISTRATION_REQUEST:
      return { ...state, registration: "запрос" };
    case FETCH_REGISTRATION_SUCCESS:
      return { ...state, registration: "успешно" };
    case FETCH_REGISTRATION_FAILURE:
      return { ...state, registration: action.error };
    default:
      return state;
  }
};

export default registrationReducer;

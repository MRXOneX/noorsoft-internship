import {
  FETCH_EMAIL_FAILURE,
  FETCH_EMAIL_REQUEST,
  FETCH_EMAIL_SUCCESS,
  FETCH_GOOGLE_FAILURE,
  FETCH_GOOGLE_REQUEST,
  FETCH_GOOGLE_SUCCESS,
  FETCH_GITHUB_FAILURE,
  FETCH_GITHUB_REQUEST,
  FETCH_GITHUB_SUCCESS,
} from "../../constans/authorizationConstans/loginConstans";

const initialState = {
  loginEmailLoading: false,
  loginEmailSuccess: false,
  loginEmailError: null,

  loginGoogleLoading: false,
  loginGoogleSuccess: false,
  loginGoogleError: null,

  loginGithubLoading: false,
  loginGithubSuccess: false,
  loginGithubError: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMAIL_REQUEST:
      return { ...state, loginEmailLoading: true };
    case FETCH_EMAIL_SUCCESS:
      return { ...state, loginEmailSuccess: true };
    case FETCH_EMAIL_FAILURE:
      return { ...state, loginEmailError: action.error };

    case FETCH_GOOGLE_REQUEST:
      return { ...state, loginGoogleLoading: true };
    case FETCH_GOOGLE_SUCCESS:
      return { ...state, loginGoogleSuccess: true };
    case FETCH_GOOGLE_FAILURE:
      return { ...state, loginGoogleError: action.error };

    case FETCH_GITHUB_REQUEST:
      return { ...state, loginGithubLoading: true };
    case FETCH_GITHUB_SUCCESS:
      return { ...state, loginGithubSuccess: true };
    case FETCH_GITHUB_FAILURE:
      return { ...state, loginGithubError: action.error };
    default:
      return state;
  }
};

export default loginReducer;

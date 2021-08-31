import {
  FETCH_UPDATEPASSWORD_FAILURE,
  FETCH_UPDATEPASSWORD_REQUEST,
  FETCH_UPDATEPASSWORD_SUCCESS,
} from "../../constans/authorizationConstans/updatePasswordConstans";

const initialState = {
  updatePassword: null,
};
const updatePassword = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_UPDATEPASSWORD_REQUEST:
      return { ...state, updatePassword: "запрос" };
    case FETCH_UPDATEPASSWORD_SUCCESS:
      return { ...state, updatePassword: "Пароль успешно сменен" };
    case FETCH_UPDATEPASSWORD_FAILURE:
      return { ...state, updatePassword: `ошибка ${action.error}` };
    default:
      return state;
  }
};
export default updatePassword;

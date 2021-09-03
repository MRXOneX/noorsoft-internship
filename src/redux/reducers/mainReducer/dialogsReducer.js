import {
  FETCH_DIALOGS_FAILURE,
  FETCH_DIALOGS_REQUEST,
  FETCH_DIALOGS_SUCCESS,
  SET_DIALOGS_ACTIVE,
  SET_DIALOGS_COMPLECTED,
  SET_DIALOGS_GET_START,
  SET_DIALOGS_SAVED,
} from "../../constans/mainConstans/dialogsConstans";

const initialState = {
  dataDialogsGetStart: null,
  dataDialogsActive: null,
  dataDialogsSaved: null,
  dataDialogsComplected: null,

  dialogsLoading: false,
  dialogsSuccess: false,
  dialogsError: null,
};
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DIALOGS_REQUEST:
      return { ...state, dialogsLoading: true };

    case FETCH_DIALOGS_SUCCESS:
      return { ...state, dialogsSuccess: true };

    case FETCH_DIALOGS_FAILURE:
      return { ...state, dialogsError: action.error };

    case SET_DIALOGS_GET_START:
      return { ...state, dataDialogsGetStart: action.dataGetStart };

    case SET_DIALOGS_ACTIVE:
      return { ...state, dataDialogsActive: action.dataActive };

    case SET_DIALOGS_SAVED:
      return { ...state, dataDialogsSaved: action.dataSaved };

    case SET_DIALOGS_COMPLECTED:
      return { ...state, dataDialogsComplected: action.dataComplected };

    default:
      return state;
  }
};

export default dialogsReducer;

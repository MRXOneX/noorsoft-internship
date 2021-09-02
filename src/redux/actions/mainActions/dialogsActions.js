import {
  FETCH_DIALOGS_FAILURE,
  FETCH_DIALOGS_REQUEST,
  FETCH_DIALOGS_SUCCESS,
  SET_DIALOG_IN_ACTIVE,
  SET_DIALOG_IN_SAVED,
  SET_DIALOGS_ACTIVE,
  SET_DIALOGS_COMPLECTED,
  SET_DIALOGS_GET_START,
  SET_DIALOGS_SAVED,
} from "../../constans/mainConstans/dialogsConstans";

export const dialogsActions = {
  dialogsRequest: () => ({ type: FETCH_DIALOGS_REQUEST }),
  dialogsSuccess: () => ({ type: FETCH_DIALOGS_SUCCESS }),
  dialogsFailure: (error) => ({ type: FETCH_DIALOGS_FAILURE, error }),

  setDialogsGetStart: (dataGetStart) => ({
    type: SET_DIALOGS_GET_START,
    dataGetStart,
  }),
  setDialogsActive: (dataActive) => ({ type: SET_DIALOGS_ACTIVE, dataActive }),
  setDialogsSaved: (dataSaved) => ({ type: SET_DIALOGS_SAVED, dataSaved }),
  setDialogsComplected: (dataComplected) => ({
    type: SET_DIALOGS_COMPLECTED,
    dataComplected,
  }),

  setDialogInActive: (obj) => ({ type: SET_DIALOG_IN_ACTIVE, obj }),
  setDialogInSaved: (obj) => ({ type: SET_DIALOG_IN_SAVED, obj }),
};

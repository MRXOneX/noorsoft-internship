import { call, put, takeLatest } from "redux-saga/effects";

import { SET_DIALOG_IN_SAVED } from "../../constans/mainConstans/dialogsConstans";

import { dialogsActions } from "../../actions/mainActions/dialogsActions";

import { reduxSagaFirebase } from "../../../index";

function* saveDialogSaga(action) {
  yield call(reduxSagaFirebase.database.update, `/dialogs/${action.obj.id}`, {
    id: action.obj.id,
    name: action.obj.name,
    status: "saved",
  });
  yield put(dialogsActions.dialogsRequest());
}

export default function* saveDialogSagaWatch() {
  yield takeLatest(SET_DIALOG_IN_SAVED, saveDialogSaga);
}

import { call, put, takeLatest } from "redux-saga/effects";

import { FETCH_DIALOGS_REQUEST } from "../../constans/mainConstans/dialogsConstans";

import { dialogsActions } from "../../actions/mainActions/dialogsActions";

import { reduxSagaFirebase } from "../../../index";

function* getDialogs() {
  try {
    const data = yield call(reduxSagaFirebase.database.read, "/dialogs");

    const dataGetStart = data.filter((item) => item.status === "getStart");
    const dataActive = data.filter((item) => item.status === "active");
    const dataSaved = data.filter((item) => item.status === "saved");
    const dataComplected = data.filter((item) => item.status === "complected");

    yield put(dialogsActions.setDialogsGetStart(dataGetStart));
    yield put(dialogsActions.setDialogsActive(dataActive));
    yield put(dialogsActions.setDialogsSaved(dataSaved));
    yield put(dialogsActions.setDialogsComplected(dataComplected));
    yield put(dialogsActions.dialogsSuccess());
  } catch (error) {
    yield put(dialogsActions.dialogsFailure(`ошибка: ${error}`));
  }
}

export default function* getDialogsWatch() {
  yield takeLatest(FETCH_DIALOGS_REQUEST, getDialogs);
}

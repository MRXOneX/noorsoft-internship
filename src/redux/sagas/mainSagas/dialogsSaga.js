import { call, put, takeLatest } from "redux-saga/effects";

import { FETCH_DIALOGS_REQUEST } from "../../constans/mainConstans/dialogsConstans";

import { dialogsActions } from "../../actions/mainActions/dialogsActions";

import { reduxSagaFirebase } from "../../../index";

function* getDialogs() {
  try {
    const data = yield call(reduxSagaFirebase.database.read, "/dialogs");

    const dataGetStart = data.filter((item) => {
      if (item.status === "getStart") return item;
    });
    const dataActive = data.filter((item) => {
      if (item.status === "active") return item;
    });
    const dataSaved = data.filter((item) => {
      if (item.status === "saved") return item;
    });
    const dataComplected = data.filter((item) => {
      if (item.status === "complected") return item;
    });
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

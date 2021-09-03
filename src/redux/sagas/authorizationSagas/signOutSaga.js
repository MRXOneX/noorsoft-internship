import { call, put, takeLatest } from "redux-saga/effects";

import { FETCH_OUT_REQUEST } from "../../constans/authorizationConstans/signOutConstans";

import { signOutActions } from "../../actions/authorizationActions/signOutAction";
import { authActions } from "../../actions/authorizationActions/authActions";

import { reduxSagaFirebase } from "../../../index";



function* signOut() {
  try {
    yield call(reduxSagaFirebase.auth.signOut);
    yield put(signOutActions.signOutSuccess());
    yield put(authActions.setUserRequest());
  } catch (error) {
    yield put(signOutActions.signOutFailure(error));
  }
}

export default function* signOutWatch() {
  yield takeLatest(FETCH_OUT_REQUEST, signOut);
}

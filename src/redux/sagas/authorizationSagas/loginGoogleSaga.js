import { call, put, takeLatest } from "redux-saga/effects";

import firebase from "firebase";

import { FETCH_GOOGLE_REQUEST } from "../../constans/authorizationConstans/loginConstans";

import { loginGoogleActions } from "../../actions/authorizationActions/loginActions";
import { authActions } from "../../actions/authorizationActions/authActions";

import { reduxSagaFirebase } from "../../../index";



const authProviderGoogle = new firebase.auth.GoogleAuthProvider();

function* loginGoogleSaga() {
  try {
    yield call(reduxSagaFirebase.auth.signInWithPopup, authProviderGoogle);
    yield put(loginGoogleActions.setGoogleSuccess());
    yield put(authActions.setUserRequest());
  } catch (error) {
    yield put(loginGoogleActions.setGoogleFailure(error));
  }
}

export default function* loginGoogleWatch() {
  yield takeLatest(FETCH_GOOGLE_REQUEST, loginGoogleSaga);
}

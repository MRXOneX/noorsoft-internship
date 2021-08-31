import { call, put, takeLatest } from "redux-saga/effects";
import firebase from "firebase";

import { FETCH_GITHUB_REQUEST } from "../../constans/authorizationConstans/loginConstans";
import { loginGithubActions } from "../../actions/authorizationActions/loginActions";
import { authActions } from "../../actions/authorizationActions/authActions";
import { reduxSagaFirebase } from "../../../index";

const authProviderGithub = new firebase.auth.GithubAuthProvider();

function* loginGithubSaga() {
  try {
    yield call(reduxSagaFirebase.auth.signInWithPopup, authProviderGithub);
    yield put(loginGithubActions.setGithubSuccess());
    yield put(authActions.setUserRequest());
  } catch (error) {
    yield put(loginGithubActions.setGithubFailure(error));
  }
}

export default function* loginGithubWatch() {
  yield takeLatest(FETCH_GITHUB_REQUEST, loginGithubSaga);
}

import { all } from "redux-saga/effects";

import updatePasswordWatch from "./authorizationSagas/updatePasswordSaga";
import forgotPasswordWatch from "./authorizationSagas/forgotPasswordSaga";
import loginEmailWatch from "./authorizationSagas/loginEmailAndPassword";
import registrationWatch from "./authorizationSagas/registrationSaga";
import authChangedWatch from "./authorizationSagas/authChangedSaga";
import loginGoogleWatch from "./authorizationSagas/loginGoogleSaga";
import loginGithubWatch from "./authorizationSagas/loginGithubSaga";
import signOutWatch from "./authorizationSagas/signOutSaga";

import enterDialogWatch from "./mainSagas/enterDialogSaga";
import getDialogsWatch from "./mainSagas/dialogsSaga";
import saveDialogSagaWatch from "./mainSagas/saveDialogSaga";

export default function* rootSaga() {
  yield all([
    loginEmailWatch(),
    authChangedWatch(),
    registrationWatch(),
    loginGoogleWatch(),
    loginGithubWatch(),
    forgotPasswordWatch(),
    updatePasswordWatch(),
    signOutWatch(),
    getDialogsWatch(),
    enterDialogWatch(),
    saveDialogSagaWatch(),
  ]);
}

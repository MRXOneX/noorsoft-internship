import {all} from 'redux-saga/effects'

import updatePasswordWatch from "./authSagas/updatePasswordSaga";

import forgotPasswordWatch from "./authSagas/forgotPasswordSaga";

import loginEmailWatch from "./authSagas/loginEmailAndPassword";

import registrationWatch from "./authSagas/registrationSaga";

import authChangedWatch from "./authSagas/authChangedSaga";

import loginGoogleWatch from "./authSagas/loginGoogleSaga";

import loginGithubWatch from "./authSagas/loginGithubSaga";



export default function* rootSaga() {
    yield all([
        loginEmailWatch(), authChangedWatch(),
        registrationWatch(), loginGoogleWatch(),
        loginGithubWatch(), forgotPasswordWatch(),
        updatePasswordWatch()
    ])
}
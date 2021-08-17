import {call, put, takeLatest} from "redux-saga/effects";

import {FETCH_EMAIL_REQUEST} from "../../constans/loginConstans";

import {loginEmailActions} from "../../actions/loginActions";

import {authActions} from "../../actions/authActions";

import {reduxSagaFirebase} from "../../../index";



function* loginEmail(action) {
    try {
        yield call(reduxSagaFirebase.auth.signInWithEmailAndPassword, action.email.trim(), action.password)
        yield put(loginEmailActions.setEmailSuccess())
        yield put(authActions.setUserRequest())
    } catch (error) {
        console.log(error)
        yield put(loginEmailActions.setEmailFailure(error.message))
    }
}

export default function* loginEmailWatch() {
    yield takeLatest(FETCH_EMAIL_REQUEST, loginEmail)
}
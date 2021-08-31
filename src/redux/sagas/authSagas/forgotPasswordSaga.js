import {call, put, takeLatest} from "redux-saga/effects";

import {FETCH_FORGOTPASSWORD_REQUEST} from "../../constans/authorizationConstans/forgotPasswordConstans";

import {forgotPasswordActions} from "../../actions/authorizationActions/forgotPasswordActions";

import {reduxSagaFirebase} from "../../../index";



function* forgotPassword(action) {
    try {
        yield call(reduxSagaFirebase.auth.sendPasswordResetEmail, action.email);
        yield put(forgotPasswordActions.forgotPasswordSuccess());
    } catch (error) {
        yield put(forgotPasswordActions.forgotPasswordFailure(error));
    }
}

export default function* forgotPasswordWatch() {
    yield takeLatest(FETCH_FORGOTPASSWORD_REQUEST, forgotPassword)
}
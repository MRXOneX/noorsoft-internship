import {call, put, takeLatest} from "redux-saga/effects";

import {FETCH_REGISTRATION_REQUEST} from "../../constans/registrationConstans";

import {registrationActions} from "../../actions/registrationActions";

import {authActions} from "../../actions/authActions";

import {reduxSagaFirebase} from "../../../index";



function* registration(action) {
    try {
        yield call(reduxSagaFirebase.auth.createUserWithEmailAndPassword, action.email, action.password);
        yield put(registrationActions.setRegistrationSuccess());
        yield put(authActions.setUserRequest())
    } catch (error) {
        yield put(registrationActions.setRegistrationFailure(error));
    }
}

export default function* registrationWatch() {
    yield takeLatest(FETCH_REGISTRATION_REQUEST, registration)
}

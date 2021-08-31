import {call, put, takeLatest} from "redux-saga/effects";

import {FETCH_UPDATEPASSWORD_REQUEST} from "../../constans/authorizationConstans/updatePasswordConstans";

import {updatePasswordActions} from "../../actions/authorizationActions/updatePassword";

import {reduxSagaFirebase} from "../../../index";


function* updatePassword(action) {
    try {
        console.log(action)
        yield call(reduxSagaFirebase.auth.confirmPasswordReset, action.code, action.newPassword);
        yield put(updatePasswordActions.updatePasswordSuccess())
    } catch (error) {
        yield put(updatePasswordActions.updatePasswordFailure(error))
    }

}

export default function* updatePasswordWatch() {
    yield takeLatest(FETCH_UPDATEPASSWORD_REQUEST, updatePassword)
}
import {call, put, takeLatest} from "redux-saga/effects";

import {toast} from "react-toastify";

import {FETCH_UPDATEPASSWORD_REQUEST} from "../../constans/authorizationConstans/updatePasswordConstans";

import {updatePasswordActions} from "../../actions/authorizationActions/updatePassword";

import {reduxSagaFirebase} from "../../../index";

import history from '../../../history'

function handleClick() {
    toast.success(`Пароль успешно сменен`,  {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });
}

function* updatePassword(action) {
    try {
        console.log(action)
        yield call(reduxSagaFirebase.auth.confirmPasswordReset, action.code, action.newPassword);
        yield put(updatePasswordActions.updatePasswordSuccess())
        yield call(handleClick)
        history.push('/login');
    } catch (error) {
        yield put(updatePasswordActions.updatePasswordFailure(error))
    }

}

export default function* updatePasswordWatch() {
    yield takeLatest(FETCH_UPDATEPASSWORD_REQUEST, updatePassword)
}
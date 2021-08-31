import {call, put, takeLatest} from "redux-saga/effects";

import 'react-toastify/dist/ReactToastify.min.css';

import {toast} from "react-toastify";

import {FETCH_EMAIL_REQUEST} from "../../constans/authorizationConstans/loginConstans";

import {loginEmailActions} from "../../actions/authorizationActions/loginActions";

import {authActions} from "../../actions/authorizationActions/authActions";

import {reduxSagaFirebase} from "../../../index";

function handleClick() {
    toast.success(`Успешно авторизовались`,  {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });
}


function* loginEmail(action) {
    try {
        yield call(reduxSagaFirebase.auth.signInWithEmailAndPassword, action.email.trim(), action.password)
        yield put(loginEmailActions.setEmailSuccess())
        yield put(authActions.setUserRequest())
        yield call(handleClick)
    } catch (error) {
        console.log(error)
        yield put(loginEmailActions.setEmailFailure(error.message))
    }
}

export default function* loginEmailWatch() {
    yield takeLatest(FETCH_EMAIL_REQUEST, loginEmail)
}
import {call, put, takeLatest} from "redux-saga/effects";
import {reduxSagaFirebase} from "../../../../index";
import {FETCH_EMAIL_REQUEST, loginEmailActions} from "../../reducers/loginReducer";
import {authActions} from "../../reducers/authReducer";

function* loginEmail(action) {
    try {
        yield call(reduxSagaFirebase.auth.signInWithEmailAndPassword, action.email.trim(), action.password)
        yield put(loginEmailActions.setEmailSuccess())
        yield put(authActions.setUserRequest())
    } catch (error) {
        yield put(loginEmailActions.setEmailFailure(error))
    }
}

export default function* loginEmailWatch() {
    yield takeLatest(FETCH_EMAIL_REQUEST, loginEmail)
}
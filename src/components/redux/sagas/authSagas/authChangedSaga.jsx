import firebase from "firebase";

import {call, put, takeEvery} from "redux-saga/effects";

import {FETCH_USER_REQUEST, authActions} from "../../reducers/authReducer";



function onAuthStateChanged() {
    return new Promise((resolve) => {
        firebase.auth().onAuthStateChanged(user => resolve(user))
    })
}

function* authChanged() {
    try {
        const user = yield call(onAuthStateChanged);
        if (user) {
            yield put(authActions.setUser({
                id: user.uid,
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }))
            yield put(authActions.setUserSuccess())
        } else {
            yield put(authActions.setUser(null))
        }

    } catch (error) {
        yield put(authActions.setUserFailure(error.message));
    }
}

export default function* authChangedWatch() {
    yield takeEvery(FETCH_USER_REQUEST, authChanged)
}
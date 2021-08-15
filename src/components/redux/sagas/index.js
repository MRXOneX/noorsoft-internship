import {all} from 'redux-saga/effects'

import loginEmailWatch from "./authSagas/loginEmailAndPassword";

import authChangedWatch from "./authSagas/authChangedSaga";



export default function* rootSaga() {
    yield all([loginEmailWatch(), authChangedWatch()])
}
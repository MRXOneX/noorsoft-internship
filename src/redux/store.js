import {applyMiddleware, combineReducers, createStore} from "redux";

import createSagaMiddleware from 'redux-saga'

import rootSaga from "./sagas";

//reducers
import forgotPasswordReducer from "./reducers/fotgotPasswordReducer";

import registrationReducer from "./reducers/registrationReducer";

import loginReducer from "./reducers/loginReducer";

import authReducer from "./reducers/authReducer";


const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
    auth: authReducer,
    login: loginReducer,
    registration: registrationReducer,
    forgotPassword: forgotPasswordReducer
})
const store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)
export default store
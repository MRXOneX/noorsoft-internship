import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas/index";
//reducers
import authReducer from "./reducers/authReducer";
import loginReducer from "./reducers/loginReducer";

const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
    auth: authReducer,
    login: loginReducer
})
const store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)
export default store
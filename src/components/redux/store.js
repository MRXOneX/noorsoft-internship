import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas/index";

const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({

})
const store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)
export default store
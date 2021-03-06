import { applyMiddleware, combineReducers, createStore } from "redux";

import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas";

//reducers
import forgotPasswordReducer from "./reducers/authorizationReducer/fotgotPasswordReducer";
import registrationReducer from "./reducers/authorizationReducer/registrationReducer";
import updatePassword from "./reducers/authorizationReducer/updatePassword";
import loginReducer from "./reducers/authorizationReducer/loginReducer";
import authReducer from "./reducers/authorizationReducer/authReducer";

import dialogReducer from "./reducers/messagesReducer/dialogReducer";

import dialogsReducer from "./reducers/mainReducer/dialogsReducer";
import mainReducer from "./reducers/mainReducer/mainReducer";

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  auth: authReducer,
  login: loginReducer,
  registration: registrationReducer,
  forgotPassword: forgotPasswordReducer,
  updatePassword: updatePassword,
  dialogs: dialogsReducer,
  main: mainReducer,
  dialog: dialogReducer,
});
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
export default store;

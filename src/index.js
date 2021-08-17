import React from 'react';

import ReactDOM from 'react-dom';

import firebase from 'firebase'

import {Provider} from "react-redux";

import ReduxSagaFirebase from "redux-saga-firebase";

import App from './App';

import store from "./redux/store";
console.log(process.env)

export const reduxSagaFirebase = new ReduxSagaFirebase(firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
    databaseURL: process.env.REACT_APP_DATABASE_URL
}))
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


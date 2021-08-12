import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase'
import {Provider} from "react-redux";
import store from "./components/redux/store";
firebase.initializeApp({
    apiKey: "AIzaSyDaGaWNkGzUS0LYPwxD7JsD2a3LQZw3veM",
    authDomain: "noorsoft-project-e95ff.firebaseapp.com",
    projectId: "noorsoft-project-e95ff",
    storageBucket: "noorsoft-project-e95ff.appspot.com",
    messagingSenderId: "884624786586",
    appId: "1:884624786586:web:1f539ede55178bd8a14b23",
    measurementId: "G-YY8DHK03KK",
    databaseURL: "https://noorsoft-project-e95ff-default-rtdb.firebaseio.com/"
})
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


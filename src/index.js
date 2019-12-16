import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAT1qtuw-wWOBzXZCAYb2f8azv11JBsSM0",
    authDomain: "scl011-burger-queen.firebaseapp.com",
    databaseURL: "https://scl011-burger-queen.firebaseio.com",
    projectId: "scl011-burger-queen",
    storageBucket: "scl011-burger-queen.appspot.com",
    messagingSenderId: "148959434327",
    appId: "1:148959434327:web:2c3b4f16abd05bfbadf512",
    measurementId: "G-QVE7SJ2Y0T"
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

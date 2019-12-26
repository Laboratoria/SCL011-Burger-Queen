import React, { Suspense }from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { FirebaseAppProvider } from 'reactfire';
import firebaseConfig from './config'

// suspense: el componente espera a la carga de firebase antes de hacer el render
ReactDOM.render((
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <Suspense fallback={"cargando la app"}>
        <App />
        </Suspense>
    </FirebaseAppProvider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

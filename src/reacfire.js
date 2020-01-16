
import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import App from "./app";
import firebaseConfig from "./firebaseComfig";
import {FirebaseAppProvider} from "reactfire";
import * as serviceWorker from "./serviceWorker";


ReactDOM.render(
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Suspense fallback={"Conectando la APP..."}>
        <App />
      </Suspense>
    </FirebaseAppProvider>,
    document.getElementById("root")
  );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
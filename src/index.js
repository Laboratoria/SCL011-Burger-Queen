import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import * as serviceWorker from "./serviceWorker";

import "./global.css";
//import Init from "./components/Init";
import Tables from "./components/tables";
import App from "./app";
import firebaseConfig from "./firebaseComfig";
import {FirebaseAppProvider} from "reactfire";

const container = document.getElementById("root");

ReactDOM.render(<Tables />, container);

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

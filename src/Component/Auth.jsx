import React, { useState } from 'react';
import '../App.css';
import "firebase/auth";
import Navigation from'./Navigation';
import { useFirebaseApp, useUser } from "reactfire";

export default (props) => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword] = useState("");

    const firebase = useFirebaseApp();

    const user = useUser();

    const login=() => {
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            let errorCode = error.code;
            console.log(errorCode)
            let errorMessage = error.message;
            console.log(errorMessage)
        });   
    }

    const logOut= () => {
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
          }).catch(function(error) {
            // An error happened.
          });
    }

    return (
        <div>
            {
                !user && 

            <div>
            <label htmlFor="email">Correo</label>
            <input type="email" id="email" onChange={ (event) => setEmail(event.target.value)}/>
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" onChange={ (event) => setPassword(event.target.value)}/> 
            <button onClick={login}>Iniciar Sesion </button>
            </div>
            }
            {
                <React.Fragment>
                user && <Navigation/><button onClick={logOut}>Cerrar sesion</button>
                </React.Fragment>
            }
        </div>
    )
}
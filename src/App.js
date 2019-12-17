import React from 'react';
import './App.css';
import { useFirebaseApp, useUser } from "reactfire";
import Auth from "./Auth";

function App () {
    const firebase = useFirebaseApp();
    console.log(firebase)

    const user = useUser();

    return (
        
        <div className="user-app">
            { user && <p>Usuario: {user.email}</p> }
            <Auth />
        </div>

    )
}

export default App;


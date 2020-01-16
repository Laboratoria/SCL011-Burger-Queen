import React from "react";
import {useFirebaseApp} from "reactfire";
import Init from "./components/Init";


function App(){
    const firebase = useFirebaseApp();
    console.log(firebase);
    return(
   <Init/>
    );
}
export default App;
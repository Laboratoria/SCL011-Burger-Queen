import React from "react";
import {useFirebaseApp} from "reactfire";
import Tables from "./components/tables";


funcion App(){
    const firebase = useFirebaseApp();
    console.log(firebase);
    return(
   <Tables/>
    );
}
export default App;
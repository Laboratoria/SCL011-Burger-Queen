import React, {Component} from 'react';
//import './App.css';


class InputName extends Component {
    render (){
        return (
        <div> 
            <input type="text" className= "inputName" id= "inputGeneric"  placeholder = "Nombre cliente" />
        </div>

        );
    }

}

export default InputName
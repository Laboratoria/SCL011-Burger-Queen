import React, {Component} from 'react';
import './App.css';


class InputName extends React.Component {
    render (){
        return (
        <div> 
            <input type="text" classname= "inputName" id= "inputGeneric"  placeholder = "Nombre cliente" />
        </div>

        );
    }

}

export default InputName
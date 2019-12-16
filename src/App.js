import React, {Component} from 'react';
import './App.css';
import data from './data.json';

class App extends Component {
    constructor () {
        super ()
        this.state = {
            name: "cami"
        }
    };

    render () {
        return <h1>hola {this.state.name}</h1>
    }
}


export default App;

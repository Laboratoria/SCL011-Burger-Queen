import React, { Component } from 'react';
//import './App.css';

class Combobox extends Component {
    render(){
        return <div className="combobox">
                <div className="title">1. ELEGIR MESA</div>
                <select>
                    <option>Mesa 1</option>
                    <option>Mesa 2</option>
                    <option>Mesa 3</option>
                </select>
            </div>
    }
}

export default Combobox;
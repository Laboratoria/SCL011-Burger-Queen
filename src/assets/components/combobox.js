import React, { Component } from 'react';
import './App.css';

class Combobox extends Component {
    render(){
        return <div>
                <p className="titleNumber">1.</p><h2>ELEGIR MESA</h2>
                <select>
                    <option>Mesa 1</option>
                    <option>Mesa 2</option>
                    <option>Mesa 3</option>
                </select>
            </div>
    }
}

export default Combobox;
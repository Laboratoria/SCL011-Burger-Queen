import React, { Component } from 'react';
import Breakfast from './Breakfast'
import Lunch from '../data/lunch';

import { BrowserRouter, Route } from "react-router-dom";

class InputClient extends Component {

    state = {
        value:"",
    }

    render () {
        return (
            <div>
            <p>Nombre Cliente</p>
            <input onChange={e => this.setState({value: e.target.value})}
            value={this.state.value} />
            <br />
            {this.state.value}
            <br />
            </div>
        )
    }
}


const Waiter = (props) => {

    const { history } = props;

    return (
        <BrowserRouter>
                <div>
                  <div>
                      <InputClient />
                      <br />
                  </div>
                <button onClick={() => history.push('/breakfast')}>
                    Desayuno
                    </button>
                    <Breakfast />
                    <button onClick={() => history.push('/lunch')}>
                    Almuerzo
                    </button>
                    <Lunch />
                    <Route path="/breakfast" component={ Breakfast } />
                </div>    
        </BrowserRouter>
    )
}

export default Waiter;
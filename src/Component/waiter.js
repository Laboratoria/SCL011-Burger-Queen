import React from 'react';
import Breakfast from '../data/breakfast'

//import Lunch from '.data/lunch';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";




const Waiter = (props) => {
    const { history } = props;

    return (
        <Router>
        <div>
            
                <button onClick={() => history.push('/breakfast')}>
                    Desayuno
                </button>
                <Breakfast />
                <button onClick={() => history.push('/lunch')}>
                    Almuerzo
                </button>
                <Route path="/breakfast" component={ Breakfast } />
            </div>
        </Router>
    )
    
}

export default Waiter;
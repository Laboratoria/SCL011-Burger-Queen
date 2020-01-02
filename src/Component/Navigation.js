import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Waiter from './waiter';
import Kitchen from './kitchen';


function Nav () {
    return (
        <Router>
        <div>
                <ul>
                    <li>
                    <Link to='/waiter'>Meserx</Link>
                    </li>
                    <li>
                        <Link to='/kitchen'>Cocina</Link>
                    </li>
                </ul>

            <Route exact path="/waiter" component={ Waiter } />
            <Route path="/kitchen" component={ Kitchen } />
            
        </div>
        </Router>
       
    );
}


export default Nav;
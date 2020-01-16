import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Principal from '../pages/principal';
import Order from '../pages/order';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/principal" component={Principal} />
                <Route path="/order" component={Order} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;
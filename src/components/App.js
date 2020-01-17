import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Principal from '../pages/principal';
import Order from '../pages/order';
import OrdersHistory from '../pages/OrdersHistory';
import ChefTables from '../pages/chefTables';

function Opp() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/principal" component={Principal} />
                <Route path="/order" component={Order} />
                <Route path="/orderHistory" component={OrdersHistory} />
                <Route path="/chefTables" component={ChefTables} />
            </Switch>
        </BrowserRouter>
    )
}

export default Opp;
import React from 'react';

import Navbar from "../components/Navbar";
import { Link } from 'react-router-dom';

class OrdersHistory extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <h2>Historial de pedidos</h2>
                <Link to="/principal" className="btn btn-success" >Pagina Principal</Link>
            </div>
        );
    };
};

export default OrdersHistory;
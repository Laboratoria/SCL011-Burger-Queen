import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = props => {
  return (
    <Router>
      <nav className="navigation-style">
        <ul>
          <li>
            <Link to="/menú">Menú</Link>
          </li>
          <li>
            <Link to="/listos">Pedidos Listos</Link>
          </li>
          <li>
            <Link to="/pay">Pagados</Link>
          </li>
        </ul>
      </nav>
    </Router>
  );
};
export default Navigation;

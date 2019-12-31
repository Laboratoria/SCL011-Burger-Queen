import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = props => {
  return (
      <nav className="navigation-style">
        <ul>
          <li>
            <Link to="/Breakfast">Desayunos</Link>
          </li>
          <li>
            <Link to="/Lunch">Almuerzos</Link>
          </li>
          <li>
            <Link to="/listos">Pedidos Listos</Link>
          </li>
          <li>
            <Link to="/pay">Pagados</Link>
          </li>
        </ul>
      </nav>
  );
};
export default Navigation;

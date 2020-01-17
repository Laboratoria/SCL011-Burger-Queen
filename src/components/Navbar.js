import React from "react";

import "./styles/Navbar.css";
class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-inner">
          <h3>Estado de pedidos</h3>
          <div className="container">
            <div className="button">Mesa 1</div>
            <div className="button">Mesa 2</div>
            <div className="button">Mesa 3</div>
            <div className="button">Mesa 4</div>
            <div className="button">Mesa 5</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;

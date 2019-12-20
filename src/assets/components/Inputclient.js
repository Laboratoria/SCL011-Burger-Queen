import React, { Component } from "react";
//import "./Inputclient.css";


class Inputclient extends Component {
  render() {
    return <div className="input-container">
    <label >Cliente </label>
    <input type="text" /> 
    <label >N° de Pedido </label>
    <input type="text" /> 
    </div>
  }
}

export default Inputclient;

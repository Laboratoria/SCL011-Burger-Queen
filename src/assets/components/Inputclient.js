import React, { Component } from "react";
//import "./Inputclient.css";


class Inputclient extends Component {
  render() {
    return <div className="input-container">
    <label >Cliente </label>
    <input type="text" name="client" onChange={this.props.change} /> 
    <label >N° de Mesa </label>
    <input type="number" name="table"  onChange={this.props.change}/> 
    </div>
  }
}

export default Inputclient;

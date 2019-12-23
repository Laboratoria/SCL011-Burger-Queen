import React, { Component } from "react";
//import "./Inputclient.css";
import PropType from 'prop-types';

class Inputclient extends Component {
  render() {
    return <div className="input-container">
    <label >Cliente </label>
    <input type="text" /> {this.props.client}

    </div>
  }
}
Inputclient.PropType={
  client:PropType.string
  
}

export default Inputclient;

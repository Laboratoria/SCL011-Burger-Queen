import React from "react";

import Logo from "../images/logopequeño.png";
import "./styles/Init.css";
import ButtonBasic from "./btnBasic";

class Init extends React.Component {
  render() {
    return (
      <div className="all">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div>
          <ButtonBasic name="Mesero" />
          <ButtonBasic name="Cocinero" />
        </div>
      </div>
    );
  }
}

export default Init;

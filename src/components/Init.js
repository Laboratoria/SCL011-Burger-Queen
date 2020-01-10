import React from "react";

import Logo from "../images/logopequeño.png";
import "./styles/Init.css";

class Init extends React.Component {
  render() {
    return (
      <div className="all">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div>
          <button>Mesero</button>
          <button>Cocinero</button>
        </div>
      </div>
    );
  }
}

export default Init;

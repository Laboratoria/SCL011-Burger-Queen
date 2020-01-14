import React from "react";

import "../global.css";
import Navbar from "../components/Navbar";
import ButtonBasic from "../components/btnBasic";
import "./styles/principal.css";

class Principal extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className="waiter">
                  <ButtonBasic name="Mesero" />
                </div>
              </div>
              <div className="col-6">
                <div className="chef ">
                  <ButtonBasic name="Cocinero" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Principal;

import React from "react";

import "../global.css";
import Navbar from "../components/Navbar";
import "./styles/principal.css";
import { Link } from "react-router-dom";

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
                  <Link to="/order" className="btn btn-success">Mesero</Link>
                </div>
              </div>
              <div className="col-6">
                <div className="chef ">
                  <Link to="" className="btn btn-success">Cocinero</Link>
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

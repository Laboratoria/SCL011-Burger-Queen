import React from "react";
import ButtonBasic from "../components/btnBasic";

import Navbar from "../components/Navbar"
import { Link } from "react-router-dom";

class Order extends React.Component {
  state = { boton: {} };
  handleChange = e => {
    this.setState({
      boton: {
        ...this.state.form,
        [e.target.name]: e.targer.value
      }
    });
  };
  render() {
    return (
      <div>
        <div className="container">
          <Navbar />
          <div className="row">
            <div className="col-6">
              <div>
                <h2> Desayuno</h2>
                <ButtonBasic
                  name="Café americano $500"
                  onChange={this.handleChange}
                />
                <ButtonBasic
                  name="Café con leche $700"
                  onClick={this.handleClick}
                />
                <ButtonBasic name="Sandwich de jamón y queso $1000" />
                <ButtonBasic name="Jugo de frutas natural $700" />
              </div>

              <div>
                <h2>Hamburguesas </h2>
                <ButtonBasic name="Hamburguesa simple $1000" />
                <ButtonBasic name="Hamburgusa doblee $1500" />
              </div>

              <div>
                <h2>Acompañamientos</h2>
                <ButtonBasic name="Papas fritas $500" />
                <ButtonBasic name="Aros de cebolla $500" />
              </div>

              <div>
                <h2>Bebestibles</h2>
                <ButtonBasic name="Agua 500ml $500" />
                <ButtonBasic name="Agua 750ml $700" />
                <ButtonBasic name="Bebida/gaseosa 500ml $700" />
                <ButtonBasic name="Bebida/gaseosa 750ml $1000" />
              </div>
            </div>
          </div>
        </div>


        <div className="row">
          <div className="col-6">
            <div>
            </div>
          </div>
        </div>
        <div>
          <Link to="/orderHistory" className="btn btn-success">Historial Pedido</Link><Link to="/" className="btn btn-success">Enviar</Link> <Link to="/principal" className="btn btn-success">Volver</Link>
        </div>
      </div>
    );
  }
}
export default Order;

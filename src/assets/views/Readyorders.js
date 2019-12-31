import React, { Component } from "react";
import Logo from "../components/Logo";
import recoverOrder from "../data/recoverOrder";
import ListOrder from "../components/ListOrder";
import db from "../../firebaseInit";
import Clock from "../components/Clock";
import "../../index.css";
import Navigation from "../components/Navigation";

class Readyorders extends Component {
  constructor() {
    super();
    this.state = {
      request: [],
      timeStamp: []
    };
  }
  /**Le decimos componentDidMount que cada un segundo
     debe ejecutar la función "update", la cúal a su vez
    tiene que filtrar la data por pedidos pendientes
     y luego meterla dento del estado "request"
     */
  componentDidMount() {
    clearInterval(this.timerID);
    this.timerID = setInterval(() => this.update(), 120000);
  }
  update() {
    recoverOrder("listo").then(orders => this.setState({ request: orders }));
  }

  /**cada btn está asociado por el id, con su respectivo
       documento en firebase, por lo que al hacer click
       se cambiará el atributo "estado" a 'entregado' */
  orderToServer = e => {
    let id = e.currentTarget.value;
    let end = new Date();
    let timeEnd = end.getHours() + ":" + end.getMinutes();
    const docRef = db.collection("orders").doc(id);
    docRef
      .update({
        estado: "entregado",
        termino: timeEnd
      })
      /**si lo anterior funciona, se vuelve a llamar a
        componentDidMount para que se actualice el estado */
      .then(() => {
        console.log("Document successfully updated!");
        let docRef = db.collection("orders").doc(id);
        docRef.get().then(doc => {
          let data = doc.data();
          let mark = this.state.timeStamp;
          mark.push(data);
        });

        this.componentDidMount();
      });
  };
  render() {
    const orders = this.state.request.map((e, index) => {
      return (
        <div key={index} className="ServerToOrder-container">
          <div>
            <h5>N° de Mesa: {e.mesa}</h5>
          </div>
          <div>
            <ListOrder Products={e.orden} />
          </div>
          <button value={e.id} onClick={this.orderToServer}>
            Entregado
          </button>
        </div>
      );
    });

    return (
      <div className="container-universal">
        <div>
          <Logo />

          <div className="table-detail">
            <table>
              <thead>
                <tr>
                  <td>N° de mesa</td>
                  <td>Cliente</td>
                  <td>Inicio</td>
                  <td>Termino</td>
                </tr>
              </thead>

              <tbody>
                {this.state.timeStamp.map((x, index) => (
                  <tr key={index}>
                    <td>{x.mesa}</td>
                    <td>{x.cliente}</td>
                    <td>{x.termino}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div className="headkitchen">
          <div><Navigation/> </div>
            {" "}
          
            <span>
              <h3>Pedidos Listos</h3>{" "}
            </span> <Clock />
          </div>

          <div className="board"> {orders}</div>
        </div>
      </div>
    );
  }
}
export default Readyorders;

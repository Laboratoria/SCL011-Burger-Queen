import React, { Component } from "react";
import Logo from "../components/Logo";
import recoverOrder from "../data/recoverOrder";
import ListOrder from "../components/ListOrder";
import db from "../../firebaseInit";
import Clock from "../components/Clock";
import "../../index.css";

class Kitchen extends Component{
    constructor(){
        super()
        this.state = {
            request:[],
            timeStamp:[]
        }
    }
    /**Le decimos componentDidMount que cada un segundo
     debe ejecutar la función "update", la cúal a su vez
    tiene que filtrar la data por pedidos pendientes
     y luego meterla dento del estado "request"
     */
    componentDidMount() {
        
        clearInterval(this.timerID);
        this.timerID = setInterval(
          () => this.update(),
          2000)
      }
      update(){
        recoverOrder("pendiente")
        .then(orders => this.setState({ request: orders }))
      }

      /**cada btn está asociado por el id, con su respectivo
       documento en firebase, por lo que al hacer click
       se cambiará el atributo "estado" a 'listo' */
      orderReady=(e)=>{
        let id= e.currentTarget.value
        let end = new Date ()
        let timeEnd = end.getHours() + ":" + end.getMinutes(); 
        const docRef = db.collection('orders').doc(id)
        docRef.update({
        estado: "listo",
        termino: timeEnd
        })
        /**si lo anterior funciona, se vuelve a llamar a
        componentDidMount para que se actualice el estado */
        .then(()=> {
        console.log("Document successfully updated!");
        let docRef = db.collection("orders").doc(id);
        docRef.get().then((doc)=>{
          
              let data = doc.data()
              let mark = this.state.timeStamp
            mark.push(data);
        })
        this.update()            
        }) 
      }
    render(){
        const orders= this.state.request.map((e, index)=>{
            return(
                <div key={index} className="kitchenOrder-container">
                <div>
             <h5>N° de Mesa: {e.mesa}</h5>
                </div>
                <div>
                     <ListOrder Products={e.orden}/>
                </div>
                <button value={e.id} onClick={this.orderReady}>Confirmar</button>
            </div>
            )
        })
      
        return(
            <div className="container-universal">
                <div>
                <Logo/>
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
                                <td>{x.inicio}</td>
                                <td>{x.termino}</td>
                            </tr>))}
                        </tbody>
                        </table>
                </div>
                </div>

                <div>
            <div className="headkitchen"> <Clock/><span><h3>Comandas</h3> </span>
               </div>
           
               
            <div className="board"> {orders}</div>
                </div>
            </div>
        )
    }
}
export default Kitchen;

import React, { Component } from "react";
import Logo from "../components/Logo";
import recoverOrder from "../data/recoverOrder";
import ListOrder from "../components/ListOrder";
import db from "../../firebaseInit";
class Kitchen extends Component{
    constructor(){
        super()
        this.state = {
            request:[]
        }
    }
    componentDidMount() {
        recoverOrder("pendiente")
        .then(orders => this.setState({ request: orders }))
      }
      orderReady=(e)=>{
        let id= e.currentTarget.value
        const docRef = db.collection('orders').doc(id)
        docRef.update({
    estado: "listo"
})
.then(()=> {
    console.log("Document successfully updated!");
    this.componentDidMount()
   
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
             <h6>Pedidos</h6>
             <table>
                 <tbody>
                     <ListOrder Products={e.orden}/>
                 </tbody>
             </table>
             
                </div>
                <button value={e.id} onClick={this.orderReady}>Confirmar</button>
            </div>
            )
        })
      
        return(
            <div className="kitchen-container">
                <Logo/>
                {orders}
            </div>
        )
    }
}
export default Kitchen;

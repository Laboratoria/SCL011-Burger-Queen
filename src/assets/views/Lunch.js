import React, { Component } from 'react'
import Menu from '../components/Menu'
import products from  '../data/products.json'
import Logo from '../components/Logo'
import Navigation from '../components/Navigation'
import Inputclient from '../components/Inputclient'
import '../../index.css'
import db from '../../firebaseInit'

class Lunch extends Component{
    constructor(props){
        super(props)
        this.state={
            products: products.Lunch,
            client: "",
            table: "",
            orders: [],
            price: 0
        }
    }
    /* clickItem recupera los datos de cada producto y los guarda
    en los estados correspondientes.*/
    clickItem=(e)=>{ 
   /* la variable a continuación contiene el estado "orders" el cúal es un array.
   Por lo que le empujamos dentro un objeto que tendrá el nombre y el precio
   del producto*/
      let products = this.state.orders;
        products.push({
          product: e.product,
          price: e.price
        });
    /* se recupera el estado "price" que al comienzo vale 0 y se le suman los 
    precios de los pedidos para obtener el total del pedido*/
        let currentTotal = this.state.price;
        let sumTotal = e.price;
        let newTotal = currentTotal + sumTotal;
        this.setState({
          price: newTotal
        });
       }
       // elimina los productos del estado "orders" y por tanto, del detalle.
      removeItem = (index, e) => {
        let itemDelete = this.state.orders;
        // se elimina el item asociado al btn
        this.setState({
          orders: itemDelete.filter((itemDelete, i) => {
            return i !== index
          }),
        })
    /* Al eliminarse el item, debemos restarlo del total*/
        let currentTotal = this.state.price;
        let minusTotal = e.price;
        let newTotal = currentTotal - minusTotal;
        this.setState({
          price: newTotal
        });
      }

      /*Toma los valores de los imputs y los guarda en los 
    estados correspondientes (reacciona al cambio)*/
    handleChange=(e)=>{
      this.setState({
        [e.name]:e.value
      })
    }

      sendKitchen=()=>{
    /* Al finalizar el pedido lo enviamos a la base de datos
    para luego ser enviado a cocina */
        db.collection("orders").add({
          mesa: this.state.table,
          cliente: this.state.client,
          estado: "pendiente",
          orden: this.state.orders,
          total: this.state.price,
      })
          .then(function (docRef) {
              console.log("Document successfully written!", docRef.id);

          })
          .catch(function (error) {
              console.error("Error writing document: ", error);
          });
  
      }
    render(){
        
        return(
           <div className="holi">
               
               <div className="logo-detail">
               <Logo/>
               {/* aquí se va imprimiendo el detalle según se 
               hace el pedido*/}
               <div className="table-detail">
                <table>
                 <thead>
                 <tr>
                <td>Producto</td>
                <td>Precio</td>
                 </tr> 
                 </thead>
                 <tbody>
                {this.state.orders.map((e, index)=>
                 <tr key ={index}>
                <td>{e.product}</td>
                <td>{e.price}</td>
                <td><button onClick={() =>this.removeItem(index, e)}>Delete</button></td>
                </tr>
                 )}
                 </tbody>
                <tfoot>
                <tr>
                <td>Total:</td>
                 <td>${this.state.price}</td>
                 </tr>
                </tfoot>
               </table>
                </div>
                <Inputclient change={(e)=> this.handleChange(e.target)}/>
                <button onClick={()=>this.sendKitchen()}>Enviar a Cocina</button>
               </div>

               <div className="nav-btn">
               <Navigation/>
                {this.state.products.map((e)=>
                <Menu 
                clickItem = {this.clickItem}
                key = {e.id}
                infoproduct = {e} />
                )}
               </div>
              
                </div>
        )
    }
}
export default Lunch
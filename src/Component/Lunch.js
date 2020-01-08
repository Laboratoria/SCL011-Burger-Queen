import React, { Component} from 'react';
import data from '../data.json';
import db from '../config';
import Button from './button'
// import { Table } from "reactstrap";

class Lunch extends Component {
    // estados

    constructor (props) {
        super (props);
        this.state={
            products : data.Lunch,
            orders: [],
            price: 0
        };
    }

 // saveItem intenta recuperar datos de c/producto para guardarlos en sus estados respectivos
 
    saveItem = order => {
        let orderItem = this.state.orders;
        orderItem.push(order)
        this.setState({
            orders: orderItem,
        });

        let orderTotal = this.state.orders.reduce( (acc, elem) => acc + elem.price, 0)

        this.setState({
            price: orderTotal
        })
    }

    deleteItem(id, price){
        let itemDelete = this.state.orders;
        this.setState({
            orders: itemDelete.filter((itemDelete, i) => {
                return i !== id
            })
        });
        
        let stateOrder = this.state.price
        let orderPrice = price
        let finalOrder = stateOrder - orderPrice

        this.setState({
            price: finalOrder
        })
    }


     // enviar el array de orders a la coleccion "pedido" de firebase
     getOrder = () => {
         let newOrder = this.state.orders
         let newTotal = this.state.price
        db.collection("pedidos").add({
            orden: newOrder, 
            price: newTotal,
            })
            .then ( () => {
                console.log("ok")
            }).then(() =>{
                let emptyOrder = []
                let emptyTotal = 0
                this.setState({
                    orders: emptyOrder,
                    price: emptyTotal
                })
            }).catch ( () => {
                console.log("error")
            })
        }

render () {
    const dataLunch = this.state.products.map((data, index) => {
    return (
        <div>
            <Button 
            clicking={this.saveItem}
            products={data}
            key={index}
            name={data.name}
            price={data.price}
            />
         </div>
        )
    }
)

return (
    <div>
    {dataLunch}
    {this.state.orders.map((order, i) => {
        return (
            <div>
                <p>{order.name} price$ {order.price}</p>
                <button onClick={this.deleteItem.bind(this, i, order.price)}>
                Eliminar
                </button>
        
                <br />
                <p>Total:</p>
                <p>{this.state.price}</p>
                <button onClick={() => this.getOrder()}>Enviar</button>
            </div>
        )
    })}

</div>


)}
}

export default Lunch;

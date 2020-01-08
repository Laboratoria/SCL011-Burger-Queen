import React, { Component } from 'react'
import db from '../config';
import { Table } from "reactstrap";
import ShowProduct from '../Component/productMenu'


class Breakfast extends Component {

    state = {
        items:[],
    }

// snapshot es la respuesta que nos da la peticion get sobre todos los documentos "docs"
    componentDidMount () {
        const BreakfastCollection = 
        db.collection("breakfast").get().then((snapShots) => {
            this.setState({
                items: snapShots.docs.map(doc => {
                    return { id:doc.id, 
                             data:doc.data()}
                })
            })
        })
    }

    getOrder = () => {
        db.collection("pedidos").add({
            name: "", 
            price: "",
            })
            .then ( () => {
                console.log("ok")
            }).catch ( () => {
                console.log("error")
            })
        }

// snapshot es la respuesta que nos da la peticion get sobre todos los documentos "docs"

render () {
    const { items } = this.state;

    return (
        <div>
            <Table>
                <tbody>
                    { items.map((item, index) => (
                        <tr key={index}>
                            <td>{item.data.name}</td>
                            <td>{item.data.price}</td>
                            <td>
                            <button onClick={this.getOrder}>Agregar</button>
                            </td>
                            <ShowProduct 
                            name={item.data.name}
                                />
                        </tr>
                    ))} 
                </tbody>
            </Table>
        </div>
    )}
}

export default Breakfast
import React, { Component } from 'react'
import db from '../config';
import { Table } from "reactstrap";

// import { useFirebaseApp, useDatabaseList } from "reactfire";
 
class Lunch extends Component {

        state={
            items:[],
        }
  
// snapshot es la respuesta que nos da la peticion get sobre todos los documentos "docs"
    componentDidMount () {
        db.collection("lunch").get().then((snapShots) => {
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
    
    render () {
        const { items } = this.state;
        return (
            <div>
                <Table>
                    <tbody>
                        { items && items !== undefined ? items.map((item, key) => (
                            <tr key={key}>
                                <td>{item.data.name}</td>
                                <td>{item.data.price}</td>
                                <button onClick={this.getOrder}>Agregar</button>
                            </tr>

                        ) ):null } 
                    </tbody>
                </Table>

            </div>
        )  
    }
}

export default Lunch
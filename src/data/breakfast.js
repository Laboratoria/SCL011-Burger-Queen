import React, { Component } from 'react'
import db from '../config';
import { Table, Button } from "reactstrap";

// import { useFirebaseApp, useDatabaseList } from "reactfire";
 
export default class Breakfast extends Component {

    state = {
        items: []
    }
// snapshot es la respuesta que nos da la peticion get sobre todos los documentos "docs"
    componentDidMount () {
        db.collection("breakfast").get().then((snapShots) => {
            this.setState({
                items: snapShots.docs.map(doc => {
                    return { id:doc.id, 
                             data:doc.data()}
                })
            })
        })
    }


    render () {
        const { items } = this.state;
        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                           -
                        </tr>
                    </thead>
                    <tbody>
                        { items && items !== undefined ? items.map((item, key) => (
                            <tr key={key}>
                                <td>{item.data.name}</td>
                                <td>{item.data.price}</td>
                                <td><Button>Agregar</Button></td>
                                <td><Button>Eliminar</Button></td>
                            </tr>

                        ) ):null } 
                    </tbody>
                </Table>

            </div>
        )  
    }
}
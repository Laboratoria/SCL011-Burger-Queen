import React, { Component } from 'react'
import db from '../config';
import { Table, Button } from "reactstrap";

// import { useFirebaseApp, useDatabaseList } from "reactfire";
 
export default class Breakfast extends Component {

    state = {
        items: [],
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

    getOrder=()=>{

        console.log("funcionando");

        db.collection("pedidos").add({
           
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
      
    }


    render () {
        const {items} = this.state;

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
                                <td>
                                <Button onClick={this.getOrder}>Agregar</Button>
                                </td>
                    
                            </tr>

                        )):null } 
                    </tbody>
                </Table>

            </div>
        )  
    }
}


/*<button onClick={e => this.setState({buttonValue})}>
                                Agregar</button>
                                */
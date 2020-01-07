import React, { Component } from 'react'
import db from '../config';
import { Table, Button } from "reactstrap";

// import { useFirebaseApp, useDatabaseList } from "reactfire";
 
export default class Breakfast extends Component {

    state = {
        items: [],
        value:"",
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

    actionButton = (e) => {
        this.setState({
            buttonValue:e.target.value
        })
    }


    render () {
        const { items, buttonValue} = this.state;

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
                                {item.data.name}
                                <td>{item.data.price}</td>

                                <td>
                                <Button 
                                value={buttonValue}
                                onClick={this.actionButton}>

                                </Button>
                                <button onClick={e => this.setState({buttonValue})}>
                                Agregar</button>
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
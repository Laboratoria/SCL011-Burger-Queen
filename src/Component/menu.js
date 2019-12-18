import React, {Component} from'react'
import  db from'../config';
import { useFirebaseApp } from "reactfire";

/*export default class menú extends Component{
    
state={
        item:''
}

    componentDidMount(){
        db.collection("menú").get().then((snapShots)=>{
           this.setState({
               item:snapShots.docs.map(doc=>{
    
                   return {id:doc.id,
                           data:doc.data()}

               })
           })      
        })
    }

    render(){
        return(
            <div>
                <p>Component menu</p>
            </div>
        )
    }
   }
   */

class Menu extends Component {

    // const firebase = useFirebaseApp();

    state = {
        item:''
    }

    componentDidMount() {
       
        db.collection("menú").get().then((snapShots)=>{
           this.setState({
               item:snapShots.docs.map(doc=>{
    
                   return {id:doc.id,
                           data:doc.data()}

               })
           })
        });
    }

    render (){ 

    return (
        <div>
            <p>Component menu</p>
        </div>
    )}
}

export default Menu; 

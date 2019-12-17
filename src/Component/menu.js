import React,{Component}from'react'
import  db from'../config';
export default class menú extends Component{

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
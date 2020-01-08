import React, { Component } from 'react'
import db from '../../firebase'
import './kitchen.css'

class Kitchen extends Component{
   
        state={
            productKitchen:[],
            
        }

        componentDidMount(){
            db.collection('orders').get().then((snapShots)=>{
                this.setState({
                        productKitchen: snapShots.docs.map(doc=>{
                        console.log(doc.data().dateCollection);  
                        return{id:doc.id, data:doc.data().productTotal , date :doc.data().dateCollection ,name :doc.data().clientName}
                        
                        
                    })
                })
            })
        }
       
    render(){
        let {productKitchen}=this.state
   
       return <div className="componentKitchen">
           <div className="kitchen">

           {productKitchen.map((element )=>(   

          <div className="orderProducts">  <p className="productTitle">Orden de : {element.name}</p> 
           
           <p className="initOrder">Inicio de pedido : {element.date} horas</p>

           {element.data.map(datos =>{

           return <div className="containerProduct">  <p className ="productKitchen">
               
              {datos.product}
             
              </p>
          
              </div>
           })}
           
            
            <input className="inputCheckbox" type="checkbox"   />Listo
           </div>
           ))}
        
        </div>
          
           </div>

    }
}
export default Kitchen

                
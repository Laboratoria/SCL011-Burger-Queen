import React, { Component } from 'react'
import json1 from '../../data.json'
import ButtonMenu from './buttonmenu'

import db from '../../firebase'

class MenuLunch extends Component{
  constructor(props){
    super(props);
     this.state={
   
    json:json1.Lunch,
    price:[],
    product:[]
  }
}
clickBtn2=(productMenu)=>{
   
    let productState = this.state.product;
    productState.push(productMenu);
     
     this.setState({
       product: productState
     }); 
    
     let totalPrice =this.state.product.map(elementProduct=>elementProduct.price)
     
     const total = totalPrice.reduce((acum, elemt) => acum + elemt, 0)
     console.log(total)
     
     let precios = this.state.price;
     precios.push(total)
    
     this.setState({
      price: precios
    }); 
     console.log(this.state.price);
     
     console.log("ESTADO:", this.state.product);
    }
    //funcion para borrar post
  remove(index,price ) {
  
    const removeProduct = this.state.product.filter((element ,i)=>{
    return i !==index 
    
  })
  
    this.setState({
    product:removeProduct,
    
  })

    let reducePrice= (this.state.price[this.state.price.length - 1] -price);
    let statePrice =this.state.price
    statePrice.push(reducePrice) 

    this.setState({
    price:statePrice
  })
  
} 
  sendKitchen=()=>{
  db.collection("orders").add({
    productTotal: this.state.product,
    totalOrderPrice: this.state.price[this.state.price.length - 1]
   
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
    alert("Pedido envaido a cocina")
  })

  .catch(function(error) {
    console.error("Error adding document: ", error);
    alert("Error al enviar, intentelo denuevo")
  });
     let productsFilter = this.state.product;
     let priceFilter  =this.state.price

     priceFilter=[]
     productsFilter=[]
     
     this.setState({
     product:productsFilter,
     price:priceFilter

    })
  }

  render(){
    
    return  <div className="menusContainer">
    <div className="comandaContainer">
      {this.state.json.map((element) => ( 
      <ButtonMenu key={element.id} clickBtn={this.clickBtn2} productProp={element} />
      ))}
      </div>
    <div>

     {this.state.product.map((elementProduct,i)=> {return <div>
     <p key ={elementProduct.id}>{elementProduct.price}{elementProduct.product}</p>
     <button onClick={this.remove.bind(this, i ,elementProduct.price)} >Eliminar</button>
     </div>  

     })}
         <div>

     <p>{this.state.price[this.state.price.length - 1]}</p>
     <button onClick={()=>this.sendKitchen()}>Enviar</button>
     </div>
     </div>
     </div>
  }
}

export default MenuLunch
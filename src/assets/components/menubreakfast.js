import React, { Component } from 'react'
import json1 from '../../data.json'
import ButtonMenu from './buttonmenu'
import InputName from './input.js'
import Combobox from './combobox.js'
import db from '../../firebase'

class MenuBreakFast extends Component{
  constructor(props){
    super(props);
    this.state={

    json1:json1.Breakfast,
    price: [],
    product: []
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
  }
  render(){
    
    return <div>
      <Combobox/>
      <InputName/>
      {this.state.json1.map((element) => (
      <ButtonMenu key={element.id} clickBtn={this.clickBtn2} productProp={element} />

      ))}

      {this.state.product.map((elementProduct,i)=> {return <div>
     <p key ={elementProduct.id}>{elementProduct.price}{elementProduct.product}</p>
     <button onClick={this.remove.bind(this, i ,elementProduct.price)} >Eliminar</button>
     </div>

     })}

     <p>{this.state.price[this.state.price.length - 1]}</p>
     <button onClick={()=>this.sendKitchen()}>enviar</button>
  
     </div>
  }
}

export default MenuBreakFast
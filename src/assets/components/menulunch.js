import React, { Component } from 'react'
import json1 from '../../data.json'
import ButtonMenu from './buttonmenu'
import InputName from './input.js'
import Combobox from './combobox.js'

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
  render(){
    
    return <div> 
      <Combobox/>
      <InputName/>
    {this.state.json.map((element) => ( 
    <ButtonMenu key={element.id} clickBtn={this.clickBtn2} productProp={element} />
    ))}
    {this.state.product.map((elementProduct,i)=> {return <div>
   <p key ={elementProduct.id}>{elementProduct.price}{elementProduct.product}</p>
   <button onClick={this.remove.bind(this, i ,elementProduct.price)} >Eliminar</button>
   </div>
   })}
   
   <p>{this.state.price[this.state.price.length - 1]}</p>
    </div>
  }
}

export default MenuLunch
import React, { Component } from 'react'
import json1 from '../../data.json'
import ButtonMenu from './buttonmenu'

class MenuLunch extends Component{
  constructor(props){
    super(props);
     this.state={
   
    json:json1.Lunch,
    price:[],
    product:[]
  }
}
clickBtn2=(producto)=>{
   
    let productss = this.state.product;
    productss.push(producto);
     
     this.setState({
       product: productss
     }); 
    
     let totalPrice =this.state.product.map(e=>e.price)
     
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
  render(){
    
    return <div> 
    {this.state.json.map((element) => ( 
    <ButtonMenu key={element.id} clickBtn={this.clickBtn2} productProp={element} />
    ))}
   {this.state.product.map(e=> {return <div>
   <p key ={e.id}>{e.price}{e.product}</p>
   <button >Eliminar</button>
   </div>
   })}
   
  <p>{this.state.price[this.state.price.length - 1]}</p>
    </div>
  }
}

export default MenuLunch
import React, { Component } from 'react'
import json1 from '../../data.json'
import ButtonMenu from './buttonmenu'

class MenuBreakFast extends Component{
  constructor(props){
    super(props);
    this.state={

    json1:json1.Breakfast,
    price: [],
    product: []
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
     
      {this.state.json1.map((element) => (
      <ButtonMenu key={element.id} clickBtn={this.clickBtn2} productProp={element} />
      ))}
      {this.state.product.map(elementProduct=> { return <div>
      <p key ={elementProduct.id}>{elementProduct.price}{elementProduct.product}</p>
      <button >Eliminar</button>
      </div>

      })}
    </div>
  }
}

export default MenuBreakFast
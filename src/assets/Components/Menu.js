import React, {Component} from 'react';
import './Menu.css'
import products from  '../data/products.json'

console.log(products);
class Menu extends Component{
  state ={
    products: products
  }
    
    render(){
        return  <div className="button-container">
            {this.state.products.map(e=><button ><img src={e.img}/><p>{e.price}</p></button>)}
        </div>
        
        
        
    }
        
        
    
}



export default Menu;
import React, {Component} from 'react';
import './Menu.css'

/*products: products.Breakfast,
      products1: products.Lunch
      
      {this.state.products1.map(e=><button ><img src={e.img}/><p>{e.price}</p></button>)}*/
//console.log(products);
class Menu extends Component{
  constructor(){
    super()
    this.state ={
      orders: [],
            product: "",
            price: ""
  
    }
    this.clickItem = this.clickItem.bind(this)
  }
clickItem(){
  const itemName= this.props.product;
  const itemPrice= this.props.price;
  console.log(itemName, itemPrice);

}
    
    render(){
        return  <div className="button-container">
            <button  onClick={this.clickItem}>
              <img  src={this.props.img} alt="icon"/>
              <div>
                <h6>{this.props.product}</h6>
                <p>{this.props.price}</p>
              </div>
            </button>
        </div>
        
    }
}



export default Menu;
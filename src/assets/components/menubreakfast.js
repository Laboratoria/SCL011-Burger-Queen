import React, { Component } from 'react'
import json1 from '../../data.json'
import ButtonMenu from './buttonmenu'
import db from '../../firebase'
import Button from '@material-ui/core/Button'
import Comments from '../components/comments.js'
import { withStyles } from '@material-ui/core/styles'

class MenuBreakFast extends Component {
  constructor(props) {
    super(props);
    this.state = {

      json1: json1.Breakfast,
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
  remove(index, price) {

    const removeProduct = this.state.product.filter((element, i) => {
      return i !== index

    })

    this.setState({
      product: removeProduct,

    })

    let reducePrice = (this.state.price[this.state.price.length - 1] - price);
    let statePrice = this.state.price
    statePrice.push(reducePrice)

    this.setState({

    price:statePrice
  })
  
}
sendKitchen=()=>{
  let date = new Date ()
  let dateInit = date.getHours() + ":" + date.getMinutes() ; 
  db.collection("orders").add({

    productTotal: this.state.product,
    totalOrderPrice: this.state.price[this.state.price.length - 1],
    state: "pendiente",
    date:new Date(),
    dateCollection:dateInit,
   
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
  
  
  render() {
    const { classes } = this.props;
    return <div className="menusContainer">
      <div className="commandContainer">
        {this.state.json1.map((element) => (
          <ButtonMenu key={element.id} clickBtn={this.clickBtn2} productProp={element} />
        ))}
      </div>
      <div>
        {this.state.product.map((elementProduct, i) => {
          return <div className="command">
            <div key={elementProduct.id}>{elementProduct.product} ${elementProduct.price}</div>
            <i className="trashIcon" onClick={this.remove.bind(this, i, elementProduct.price)} class="fas fa-trash-alt fa-lg">
            </i>
          </div>
        })}
        <div className="sendKitchenContainer">
          <Comments /><br />
          <p>Total ${this.state.price[this.state.price.length - 1]}</p>
          <Button variant="contained" className={classes.active} onClick={() => this.sendKitchen()}>Enviar a cocina</Button>
        </div>
      </div>
    </div>

  }
}

export default withStyles({
  active: {
    color: '#FFFFFF',
    backgroundColor: '#FFA800',
    fontWeight: 'bold'
  }
})(MenuBreakFast)
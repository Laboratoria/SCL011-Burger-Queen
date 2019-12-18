import React, { Component } from 'react'
import Menu from '../components/Menu'
import products from  '../data/products.json'
import Logo from '../components/Logo'
import Navigation from '../components/Navigation'

class Breakfast extends Component{
    constructor(){
        super()
        this.state={
            products: products,
        }
    }
    render(){
        console.log(this.state.products.Lunchs)
        return(
           <div>
               <Logo/>
               <Navigation/>

                {this.state.products.Breakfast.map(e=>
                <Menu 
                key = {e.id}
                price = {e.price}
                product = {e.product}
                img = {e.img}/>
                )}
           </div>
           
        )
    }
}
export default Breakfast
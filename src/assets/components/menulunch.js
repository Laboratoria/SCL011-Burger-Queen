import React, { Component } from 'react'
import json1 from '../archivo.json'
import ButtonGeneric from './comidas'

class MenuDesayuno extends Component{
  constructor(props){
    super(props);
     this.state={
   
    json:json1.Lunch
  }
}
  render(){
    
    return <div>
    
      {this.state.json.map((element, i) => <ButtonGeneric key={element.id}  productProp={element}  />)}
  
    </div>
  }
}

export default MenuDesayuno
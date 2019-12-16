import React, { Component } from 'react'
import json1 from '../../data.json'
import ButtonMenu from './buttonmenu'

class MenuLunch extends Component{
  constructor(props){
    super(props);
     this.state={
   
    json:json1.Lunch
  }
}
  render(){
    
    return <div>
    
      {this.state.json.map((element, i) => <ButtonMenu key={element.id}  productProp={element}  />)}
  
    </div>
  }
}

export default MenuLunch
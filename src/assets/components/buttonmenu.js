/// boton generico para menu

import React, { Component } from 'react'

class ButtonMenu extends Component{
    
    render(){
      return  <div>
        <button className="buttonMenu" onClick={this.props.clickBtn.bind(this, this.props.productProp)}>{this.props.productProp.product}-{this.props.productProp.price}</button>
    
      </div>
    }
  }
 
  export default ButtonMenu


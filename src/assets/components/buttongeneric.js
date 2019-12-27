import React, { Component } from 'react'


  class ButtonGeneric extends Component{
    
    render(){
      return  <div>
    <button className="ButtonGeneric" onClick={this.props.clickBtn}>{this.props.name}</button>
      </div>
    }
  }
 
  export default ButtonGeneric
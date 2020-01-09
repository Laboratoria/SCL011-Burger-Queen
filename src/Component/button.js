import React, { Component } from 'react';



class Button extends Component {
  render() {
      return(
    <button onClick={this.props.clicking.bind(this, this.props.products)}>{this.props.name} ${this.props.price}</button>
      )
  }
}
export default Button;






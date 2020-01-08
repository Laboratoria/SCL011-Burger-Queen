/// boton generico para menu

import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

class ButtonMenu extends Component{
    
    render(){
      const { classes } = this.props;
      return  <div>
        <Button variant="contained" className={classes.active} onClick={this.props.clickBtn.bind(this, this.props.productProp)}>{this.props.productProp.product}<br/>{this.props.productProp.price}</Button>
    
      </div>
    }
  }
 
  export default withStyles({
    active:{
      color: '#FFFFFF',
      backgroundColor: '#23977B',
      marginRight: '10px',
      marginBottom: '10px',
    }
  }) (ButtonMenu)


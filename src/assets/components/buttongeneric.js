import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
  
  class ButtonGeneric extends Component{
    
    render(){
      const { classes } = this.props;
      return  <div>
    <Button variant="contained" className={classes.active} onClick={this.props.clickBtn}>{this.props.name}</Button>
      </div>
    }
  }
 
  export default withStyles({
    active:{
      color: '#FFFFFF',
      backgroundColor: '#FFA800',
      margin: '20px 20px',
      fontWeight: 'bold'
    }
  }) (ButtonGeneric)
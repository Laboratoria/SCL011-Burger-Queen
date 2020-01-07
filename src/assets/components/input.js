import React, {Component} from 'react';
import Input from "@material-ui/core/Input";
import { withStyles } from '@material-ui/core/styles'

//import './App.css';


class InputName extends Component {
    render (){
        const { classes } = this.props;
        return (
        <div> 
            <p className="title">2. NOMBRE CLIENTE</p>
            <Input placeholder="Nombre cliente" className={classes.input} color="secondary"/>
        </div>
        );
    }
}

export default withStyles({
    input: {
        paddingLeft: 10,
        width: 350,
        backgroundColor: '#ffffff'
    }
  }) (InputName)
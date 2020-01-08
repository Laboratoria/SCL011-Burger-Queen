import React, {Component} from 'react';
import Input from "@material-ui/core/Input";
import { withStyles } from '@material-ui/core/styles'

//import './App.css';


class InputName extends Component {
    render (){
        const { classes } = this.props;
        return (
        <div> 
         
            <div className="title">2. NOMBRE CLIENTE</div>
            <Input onChange={this.props.onChange1.bind(this)} placeholder="Nombre cliente" className={classes.input} color="secondary"/>

        </div>
        );
    }
}

export default withStyles({
    input: {
        paddingLeft: 10,
        width: 250,
        backgroundColor: '#ffffff',
        marginBottom: '3%',
    }
  }) (InputName)
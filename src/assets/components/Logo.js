import React, {Component} from 'react';
import logo from '../img/logo.png'
import './Logo.css'

class Logo extends Component{
   
    
    render(){
        return <div className="logo-container">
            <img src={logo} alt="logo"/> 
        </div>
    }
        
}



export default Logo;
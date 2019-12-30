  
import React, { Component } from 'react'
import '../../index.css'
import Logo from '../components/Logo'
import { Link } from "react-router-dom";

class Home extends Component{
render(){
    return(
        <div>
                <Logo/>
            <div className="divsHome">
            <Link to="/Breakfast"><h1>Mesero</h1></Link>
            
            </div>
            <div className="divsHome">
            <Link to="/cocina"><h1>Cocina</h1></Link>
            </div>
            </div>
    )
}
}

export default Home;

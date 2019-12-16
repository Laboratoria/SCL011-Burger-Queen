import React, { Component } from 'react'
//import ReactDOM from 'react-dom';
import Navigation from '../componets/Navigation'
import Menu from '../componets/Menu'

class Home extends Component{
   
   
render(){
    return(
        <div>
            <Navigation/>
             <Menu/>
        </div>
    )
}
}

export default Home;
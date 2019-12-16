import React, { Component } from 'react'
//import ReactDOM from 'react-dom';
import Navigation from '../components/Navigation'
import Menu from '../components/Menu'

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
import React, { Component } from 'react';
import './App.css';
import ButtonGeneric from '../src/assets/components/buttongeneric'
import Kitchen from './assets/components/kitchen';
import Waiter from './assets/views/waiter'

import { BrowserRouter as Router,Route ,Link } from "react-router-dom";

class App extends Component{
    
  render(){
    
  return <Router> <div>
  
      <header className="burgerHeader">
          <Link to="/"><ButtonGeneric name ="Mesero"/></Link>
          
          <Link to="/cocina"><ButtonGeneric name ="Cocina"/></Link>


      </header>
   <Route exact path="/" component={Waiter} />      
   <Route exact path="/Cocina" component={Kitchen} />
  
 
  
  </div>
  
  </Router>
  }

}



export default App;

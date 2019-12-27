// home para mesero
import React, { Component } from 'react';
import '../../App.css';
import MenuBreakFast from '../components/menubreakfast'
import MenuLunch  from '../components/menulunch'
import ButtonGeneric from '../components/buttongeneric'
import { BrowserRouter as Router,Route ,Link } from "react-router-dom";



class Waiter extends Component{
    
  render(){
    
  return <Router> <div className="Waiter">
    
  
          <Link to="/"><ButtonGeneric name ="Desayuno"/></Link>
          
          <Link to="/menualmuerzo"><ButtonGeneric name ="Almuerzo"/></Link>
          
   <Route exact path="/" component={MenuBreakFast } />
   <Route exact path="/menualmuerzo" component={MenuLunch } />
 
  
  </div>
 
  </Router>
  }


}




export default Waiter;
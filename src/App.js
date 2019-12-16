import React, { Component } from 'react';
import './App.css';
import MenuBreakFast from '../src/assets/components/menubreakfast'
import MenuLunch  from '../src/assets/components/menulunch'
//import ButtonGeneric from './component/comidas'
//import Select from './component/select'
import ButtonGeneric from '../src/assets/components/buttongeneric'
import { BrowserRouter as Router,Route ,Link } from "react-router-dom";


class App extends Component{
    
  render(){
    
  return <Router> <div>
    <ButtonGeneric name="Mesero"/>
  
          <Link to="/"><ButtonGeneric name ="Desayuno"/></Link>
          
          <Link to="/menualmuerzo"><ButtonGeneric name ="Almuerzo"/></Link>
          
   <Route exact path="/" component={MenuBreakFast } />
   <Route exact path="/menualmuerzo" component={MenuLunch } />
 
  
  </div>
  <button>jasdjas</button>
    <button>jasdjas</button>
  </Router>
  }

}




export default App;

// home para mesero
import React, { Component } from 'react';
import '../../App.css';
import MenuBreakFast from '../components/menubreakfast'
import MenuLunch  from '../components/menulunch'
import ButtonGeneric from '../components/buttongeneric'
import { BrowserRouter as Router,Route ,Link } from "react-router-dom";
import InputName from '../components/input.js'
import Combobox from '../components/combobox.js'
import Container from '@material-ui/core/Container'


class Waiter extends Component{
    
  render(){
  return <Router> <div className="Waiter">
    <Container maxWidth="lg">
      <div className="inputsContainer">
        <Combobox/>
        <InputName/>
      </div>
      <div className="btnsContainer">
        <Link to="/"><ButtonGeneric className="btnGeneric" name ="Desayuno"/></Link>
        <Link to="/menualmuerzo"><ButtonGeneric name ="Almuerzo"/></Link>
      </div>
      <div>
        <Route exact path="/" component={MenuBreakFast } />
        <Route exact path="/menualmuerzo" component={MenuLunch } />
      </div>
    </Container>
  
  </div>
 
  </Router>
  }
}

export default Waiter
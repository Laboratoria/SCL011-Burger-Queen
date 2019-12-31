  
import React from 'react';
import './App.css';
import Home from './assets/views/home'
import Lunch from './assets/views/Lunch'
import Breakfast from './assets/views/Breakfast'
import {BrowserRouter as Router,
  Route} from 'react-router-dom';
import Kitchen from './assets/views/Kitchen';

function App() {
  return (
    <Router>
      <Route exact path="/" component={ Home } />
        <Route path="/Lunch" component={ Lunch } />
        <Route path="/Breakfast" component={ Breakfast } />
        <Route path="/Kitchen" component={ Kitchen } />
      
    </Router>
  );
}

export default App;
  
import React from 'react';
import './App.css';
import Home from './assets/views/home'
import Lunch from './assets/views/Lunch'
import Breakfast from './assets/views/Breakfast'
import {BrowserRouter as Router,
  Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route exact path="/" component={ Home } />
        <Route path="/Lunch" component={ Lunch } />
        <Route path="/Breakfast" component={ Breakfast } />
      
    </Router>
  );
}

export default App;
import React from 'react';
import './App.css';

//import Breakfast from './data/breakfast';
//import Lunch from './data/lunch';
import Auth from './Component/Auth';
import Nav from './Component/Navigation'
import { useUser } from 'reactfire' ;

import { BrowserRouter } from 'react-router-dom';

function App () {

    const user = useUser();

    return (
      <BrowserRouter>
        <div className="App">
            { user && <p>Usuario:{user.email}</p> }
            <Auth />
            <Nav />
            
        </div>
      </BrowserRouter>
    );
}
  

export default App;




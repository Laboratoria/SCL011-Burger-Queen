import React from 'react';
import './App.css';

//import Breakfast from './data/breakfast';
//import Lunch from './data/lunch';
import Auth from './Component/Auth';
import Nav from './Component/Navigation';
import Waiter from './Component/waiter';
import Kitchen from './Component/kitchen';
import Breakfast from './data/breakfast';
import Lunch from './data/lunch';
import { useUser } from 'reactfire' ;
import { BrowserRouter as Router, Route} from 'react-router-dom';


function App () {

    const user = useUser();

    return (
      <Router>
        <div className="App">
            { user && <p>Meser@:{user.email}</p> }
            <Route exact path="/" component={Auth}/>
            <Route exact path ="/navigation" component={Nav} />
            <Route  path="/navigation/waiter" component={ Waiter } />
            <Route  path="/navigation/kitchen" component={ Kitchen } />
            <Route  path="/navigation/waiter/breakfast" component={ Breakfast } />
            <Route  path="/navigation/waiter/lunch" component={ Lunch} />
        </div>
      </Router>
    );
}
export default App;




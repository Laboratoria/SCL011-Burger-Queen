import React from 'react';
import './App.css';
import Menu from './Component/menu';


import Auth from './Auth';
import { useUser } from 'reactfire' ;

function App () {

    const user = useUser();

    return (
        <div className="App">
            { user && <p>Usuario:{user.email}</p>}
            <Auth />
            <Menu/>
        </div>
    )
}
  
export default App;


/*class App extends Component{
  
render(){
  return(
    <div>
      <Menu/>
    </div>
  );
  }
}

export default App;
*/



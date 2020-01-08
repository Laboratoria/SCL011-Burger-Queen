import React, { Component } from 'react';
import { Link } from "react-router-dom";


class InputClient extends Component {

    state = {
        value:"",
      //  showBreakfast:false  
    }

    render () {
        return (
            <div>
            <p>Nombre Cliente</p>
            <input onChange={e => this.setState({value: e.target.value})}
            value={this.state.value} />
            <br />
            {this.state.value}
            <br />
            </div>
        )
    }
}


const Waiter = () => {

    

    return (
       
            <div>
                  <div>
                      <InputClient />
                      <br />
                  </div>
                  <ul>
                    <li>
                        <Link to="/navigation/waiter/breakfast">Desayuno</Link>
                    </li>
                    <li>
                        <Link to="/navigation/waiter/lunch">Almuerzo</Link>
                    </li> 
                </ul>
            </div>    
      
    )
}

export default Waiter;
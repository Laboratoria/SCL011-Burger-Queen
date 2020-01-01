import React, { Component } from 'react';
import './Clock.css'
/**construimos un reloj para la cocina */
class Clock extends Component {
    constructor(){
        super()
        /**le damos un estado que contenga la fecha actual */
        this.state={
            date: new Date()
        }
    }
    /**componentDidMount le decimos que genere una función
      que actualiza el estado a cada segundo */
    componentDidMount() {
        clearInterval(this.timerID);
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
      tick() {
        this.setState({
          date: new Date()
        });
      }
    render(){
  /**toLocaleTimeString traduce el estado */
   return(
        <div className="clock-container">
    <h1>{this.state.date.toLocaleTimeString()}</h1>
        </div>
    )
    }
   
    
}
export default Clock;
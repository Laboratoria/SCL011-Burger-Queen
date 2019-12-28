import React, { Component } from 'react';
import './Clock.css'

class Clock extends Component {
    constructor(){
        super()
        this.state={
            date: new Date()
        }
    }
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
           
   return(
        <div className="clock-container">
    <h1>{this.state.date.toLocaleTimeString()}</h1>
        </div>
    )
    }
   
    
}
export default Clock;
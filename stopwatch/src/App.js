import React, { Component } from 'react';
import './App.css';

class Stopwatch extends Component {
  render() {
    return (
      <section>
        <Display />
      </section>
     );
  }
}

class Display extends Component {

  constructor(time){
    super();

    this.state = {
      seconds: 0,
      secondsTwo: 0,
      minutes: 0,
      minutesTwo: 0,
      hours: 0,
      hoursTwo: 0,
      pause: false,
      id: 0,
      start: false,
    };
    this.startTimer=this.startTimer.bind(this);
    this.startTime=this.startTime.bind(this);
    this.pauseTime=this.pauseTime.bind(this);
    this.resetTime=this.resetTime.bind(this);
  }
//need to create functions for each number to change (1, 9 to trigger the next)
  startTimer(){
  if(this.state.pause === false) {
      if(this.state.hours < 9) {
        this.setState({hours: this.state.hours + 1})
      } else {
        this.setState({hours: this.state.hours - 9})
        if(this.state.hoursTwo < 9) {
          this.setState({hoursTwo: this.state.hoursTwo + 1})
        } else {
          this.setState({hoursTwo: this.state.hoursTwo - 9})
          if(this.state.seconds < 9) {
            this.setState({seconds: this.state.seconds + 1})
          } else {
            this.setState({seconds: this.state.seconds - 9})
            if(this.state.secondsTwo < 5) {
              this.setState({secondsTwo: this.state.secondsTwo + 1})
            } else {
              this.setState({secondsTwo: this.state.secondsTwo - 5})
              if(this.state.minutes < 9) {
                this.setState({minutes: this.state.minutes + 1})
              } else {
                this.setState({minutes: this.state.minutes - 5})
                if(this.state.minutesTwo < 5) {
                  this.setState({minutesTwo: this.state.minutesTwo + 1})
                } else {
                  this.setState({minutesTwo: this.state.minutesTwo - 5})
                }
              }
            }
          }
        }
      }
    }
  };

  startTime(){
    if(!this.state.start) {
      this.setState({start: true})
    this.setState({pause: false});
    let interval = setInterval(this.startTimer, 10);
    this.setState({
      id: interval,
    })
    }
  }

  pauseTime(){
    if(this.state.pause === false) {
      this.setState({
        pause: true,
        start: false
      })
    }
    clearInterval(this.state.id);
  }

  resetTime() {
    this.setState({
      seconds: 0,
      secondsTwo: 0,
      minutes: 0,
      minutesTwo: 0,
      hours: 0,
      hoursTwo: 0,
      pause: true,
      start: false
    });
    clearInterval(this.state.id);
  }

  render() {
   console.log("hello")
   return(
//reference each function for number changing with onclick
      <section className="display">
        <div className="minutes">{this.state.minutesTwo}{this.state.minutes}:</div>
        <div className="seconds">{this.state.secondsTwo}{this.state.seconds}:</div>
        <div className="hours">{this.state.hoursTwo}{this.state.hours} </div>
        <div className="buttons">
          <button className="start" onClick={this.startTime}>Start</button>
          <button className="stop" onClick={this.pauseTime}>Stop</button>
          <button className="reset" onClick={this.resetTime}>Reset</button>
        </div>
      </section>
    )
  }
}


export default Stopwatch;

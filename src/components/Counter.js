import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter : 0
    }
  }
  
  incrementCounter(){
    // this.setState({
    //   counter : this.state.counter + 1
    // }, () => {console.log("Callback Value", this.state.counter)} );
    this.setState((prevState) => ({
      counter : prevState.counter + 1
    }))
    // console.log(this.state.counter)
  }

  incrementFive(){
    this.incrementCounter()
    this.incrementCounter()
    this.incrementCounter()
    this.incrementCounter()
    this.incrementCounter()
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>Counter Value : {this.state.counter} </p>
        <button onClick = { () => this.incrementFive() } >Increment By Five</button>
      </div>
    );
  }
}

export default Counter;
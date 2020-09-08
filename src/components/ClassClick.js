import React, { Component } from 'react';

class ClassClick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message : 'Hello'
    }

    // this.clickHandler = this.clickHandler.bind(this)
  }
  
  // clickHandler(){
  //   this.setState({
  //     message : 'Thanks for the click'
  //   })
  //   console.log("class click handler")
  // }

  clickHandler = () => {
    this.setState({
      message : 'Thanks for the click'
    })
  }

  render() {
    return (
      <div>
        <p> {this.state.message} </p>
        {/* <button onClick = {this.clickHandler.bind(this)} >Class Click </button> */}
        {/* <button onClick = {() => this.clickHandler()} >Class Click </button> */}
        {/* <button onClick = {this.clickHandler.bind(this)} >Class Click </button> */}
        <button onClick = {this.clickHandler} >Class Click </button>
      </div>
    );
  }
}

export default ClassClick;
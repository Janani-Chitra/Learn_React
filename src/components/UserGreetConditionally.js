import React, { Component } from 'react';

class UserGreetConditionally extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn : true
    }
  }
  
  render() {
    // ========== Short circuit operator =========
    return this.state.isLoggedIn && <div>Welcome Janani</div>

    // ==== ternary operator ===========
    // return this.state.isLoggedIn ? <div>Welcome Janani</div> : <div>Welcome Guest</div>

    // ======= element variables ==========
    // let message
    // if (this.state.isLoggedIn){
    //   message = <div>Welcome Janani</div>
    // }else{
    //   message = <div>Welcome Guest</div>
    // }
    // return <div> {message} </div>

    // ======= if else ========
    // if (this.state.isLoggedIn){
    //   return <div>Welcome Janani</div>
    // }else{
    //   return <div>Welcome Guest</div>
    // }
  }
}

export default UserGreetConditionally;
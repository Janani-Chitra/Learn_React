import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <Counter/>
      {/* <Message/> */}
      {/* <Greet name="Janani" >
        <p>She is so cute</p>
      </Greet>
      <Greet name="Somesh" />
      <Welcome name="Janani" />
      <Welcome name="Somesh" /> */}
    </div>
  );
}

export default App;

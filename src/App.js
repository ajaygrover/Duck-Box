import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const elementxd = <h1> xD </h1>;
let button = <input type="button" />;

button.onClick() = function(event) {
  elementxd.innerHTML = "XD xD XD";
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          {elementxd}
          {button} 
        </p>
      </div>
    );
  }
}

export default App;

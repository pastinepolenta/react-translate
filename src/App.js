import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import trans from './trans'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {_t('New trans 1')}
          {_t('Aloha!')}
          {_t('Stringstring')}
        </p>
      </div>
    );
  }
}

export default App;

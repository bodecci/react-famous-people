import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import FamousPerson from './components/FamousPerson'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <FamousPerson />
          <p>
            
          </p>
        </header>
      </div>
    );
  }
}

export default App;

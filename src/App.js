import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import AllTransactions from './views/TimelineSingle'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AllTransactions/>
      </div>
    );
  }
}

export default App;

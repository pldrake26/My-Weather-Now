import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import CurrentConditions from './components/CurrentConditions.js';
import SevenDay from './components/SevenDay.js';
import Footer from './components/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="current">
          <CurrentConditions />
          <SevenDay />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import CurrentConditions from './components/CurrentConditions.js';
import FiveDay from './components/FiveDay.js';
import Footer from './components/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <CurrentConditions />
          <FiveDay />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

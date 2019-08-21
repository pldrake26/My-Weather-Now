import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?zip=35906,us&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`;
    fetch(
      apiUrl
    ).then(res => res.json())
    .then(
      (result) => {
        this.setState({
          name: result.name,
          temp: result.main.temp,
          skies: result.weather[0].main,
          skiesIcon: result.weather[0].icon,
          cloudiness: result.clouds.all,
          wind: result.wind.speed,
          humidity: result.main.humidity,
          sunrise: result.sys.sunrise,
          sunset: result.sys.sunset
        });
      })
  }
  render() {
    const icon = this.state.skiesIcon;
    const iconPrefetch = `http://openweathermap.org/img/w/${icon}.png`;
    const sunriseTime = this.state.sunrise;
    const sunsetTime = this.state.sunset;
    return (
      <div className="App">
        <Header />
        <div style={{margin: '3em', color: '#2065e6'}}>
          <h2 style={{paddingBottom: '1em'}}>{this.state.name}, AL</h2>
          <p><span style={{fontSize: '3em'}}>{Math.round(this.state.temp)}&deg;&nbsp;F</span> {this.state.skies} <img src={iconPrefetch} alt="Sky Icon" width="75px" height="auto"/><br/>{new Date().toLocaleTimeString()}</p>
          <h3>Current Conditions:</h3>
          <p>
            Cloud Coverage: {this.state.cloudiness}&#37;<br/>
            Wind speed: {this.state.wind}&nbsp;Mph<br/>
            Humidity: {this.state.humidity}&#37;<br/>
            Sunrise: {new Date(sunriseTime * 1000).toLocaleTimeString()}<br/>
            Sunset: {new Date(sunsetTime * 1000).toLocaleTimeString()}
          </p>
        </div>
      </div>
    );
  }
}

export default App;

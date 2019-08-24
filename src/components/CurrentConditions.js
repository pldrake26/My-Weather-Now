import React, {Component} from 'react';

class CurrentConditions extends Component{
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
      <div style={{margin: '3em', color: '#2065e6'}}>
        <h2>{this.state.name}, AL</h2>
        <p>Data fetch time: {new Date().toLocaleDateString()}&nbsp;{new Date().toLocaleTimeString()}</p>
        <p><span style={{fontSize: '5em'}}>{Math.round(this.state.temp)}&deg;&nbsp;F&nbsp;/&nbsp;</span><img src={iconPrefetch} alt="Sky Icon" width="75px" height="auto"/>{this.state.skies}</p>
        <h3>Current Conditions:</h3>
        <ul>
          <li>Cloud Coverage: {this.state.cloudiness}&#37;</li>
          <li>Wind speed: {this.state.wind}&nbsp;Mph</li>
          <li>Humidity: {this.state.humidity}&#37;</li>
          <li>Sunrise: {new Date(sunriseTime * 1000).toLocaleTimeString()}</li>
          <li>Sunset: {new Date(sunsetTime * 1000).toLocaleTimeString()}</li>
        </ul>
      </div>
    );
  }
}

export default CurrentConditions;

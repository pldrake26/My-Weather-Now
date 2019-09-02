import React, {Component} from 'react';
import TodaysCondition from './TodaysCondition.js'

class CurrentConditions extends Component{
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    const cors_api_url = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = `${cors_api_url}https://api.darksky.net/forecast/${process.env.REACT_APP_API_KEY}/33.9548,-86.0419?units=us`;
    await fetch(
      apiUrl
    ).then(res => res.json())
    .then(
      (result) => {
        this.setState({
          temp: result.currently.temperature,
          skies: result.currently.summary,
          skiesIcon: result.currently.icon,
          precipitation: result.currently.precipProbability,
          cloudiness: result.currently.cloudCover,
          wind: result.currently.windSpeed,
          humidity: result.currently.humidity,
          sunrise: result.daily.data[0].sunriseTime,
          sunset: result.daily.data[0].sunsetTime,
          path: `/icons/${result.currently.icon}.png`
        });
      })
  }
  render() {
    return (
      <div style={{margin: '3em', color: '#2065e6'}}>
        <h2>Rainbow City, AL</h2>
        <p>Data fetch time: {new Date().toLocaleDateString()}&nbsp;{new Date().toLocaleTimeString()}</p>
        <h3 style={{margin: '3% 0 2% 0'}}>Current Conditions:</h3>
        <TodaysCondition temp={this.state.temp} skies={this.state.skies} skiesIcon={this.state.skiesIcon} precipitation= {this.state.precipitation} cloudiness={this.state.cloudiness} wind={this.state.wind} humidity={this.state.humidity} sunrise={this.state.sunrise} sunset={this.state.sunset} path={this.state.path} />
      </div>
    );
  }
}

export default CurrentConditions;

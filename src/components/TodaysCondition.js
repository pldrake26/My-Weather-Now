import React, {Component} from 'react';

class TodaysCondition extends Component {
  render(){
    const sunriseTime = this.props.sunrise;
    const sunsetTime = this.props.sunset;
    return (
      <div className="todays-condition" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', justifyContent: 'space-evenly', alignItems: 'end'}}>
        <div>
          <img src={this.props.path} alt={this.props.skiesIcon} width="75px" height="auto"/>&nbsp;&nbsp;{this.props.skies}
          <p style={{fontSize: '5em'}}>{Math.round(this.props.temp)}&deg;&nbsp;F&nbsp;</p>
        </div>
        <div>
          <ul>
            <li>Chance of precipitation: {this.props.precipitation * 100}&#37;</li>
            <li>Cloud Coverage: {this.props.cloudiness * 100}&#37;</li>
            <li>Wind speed: {this.props.wind}&nbsp;Mph</li>
            <li>Humidity: {this.props.humidity * 100}&#37;</li>
            <li>Sunrise: {new Date(sunriseTime * 1000).toLocaleTimeString()}</li>
            <li>Sunset: {new Date(sunsetTime * 1000).toLocaleTimeString()}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default TodaysCondition;

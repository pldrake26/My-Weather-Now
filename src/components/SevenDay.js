import React, {Component} from 'react';
import EachDay from './EachDay.js';

class SevenDay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?zip=35906,us&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`;
    fetch(
      apiUrl
    ).then(res => res.json())
    .then(
      (result) => {
        this.setState({
          date: result.list[3].dt,
          temp: result.list[3].main.temp,
          description: result.list[3].weather[0].main,
          icon: result.list[3].weather[0].icon,
          date2: result.list[11].dt,
          temp2: result.list[11].main.temp,
          description2: result.list[11].weather[0].main,
          icon2: result.list[11].weather[0].icon,
          date3: result.list[19].dt,
          temp3: result.list[19].main.temp,
          description3: result.list[19].weather[0].main,
          icon3: result.list[19].weather[0].icon,
          date4: result.list[27].dt,
          temp4: result.list[27].main.temp,
          description4: result.list[27].weather[0].main,
          icon4: result.list[27].weather[0].icon,
          date5: result.list[35].dt,
          temp5: result.list[35].main.temp,
          description5: result.list[35].weather[0].main,
          icon5: result.list[35].weather[0].icon
        });
      })
  }
  render() {
    const options = {weekday: 'long'};
    return (
      <div style={{margin: '3em', color: '#2065e6'}}>
        <h4>5 Day Forecast:</h4>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'}}>
          <EachDay style={{gridColumn: 1}}
            date={new Date(this.state.date * 1000).toLocaleDateString('en-US', options)}
            temp={this.state.temp}
            description={this.state.description}
            icon={this.state.icon}/>
          <EachDay style={{gridColumn: 2}}
            date={new Date(this.state.date2 * 1000).toLocaleDateString('en-US', options)}
            temp={this.state.temp2}
            description={this.state.description2}
            icon={this.state.icon2}/>
          <EachDay style={{gridColumn: 3}}
            date={new Date(this.state.date3 * 1000).toLocaleDateString('en-US', options)}
            temp={this.state.temp3}
            description={this.state.description3}
            icon={this.state.icon3}/>
          <EachDay style={{gridColumn: 4}}
            date={new Date(this.state.date4 * 1000).toLocaleDateString('en-US', options)}
            temp={this.state.temp4}
            description={this.state.description4}
            icon={this.state.icon4}/>
          <EachDay style={{gridColumn: 5}}
            date={new Date(this.state.date5 * 1000).toLocaleDateString('en-US', options)}
            temp={this.state.temp5}
            description={this.state.description5}
            icon={this.state.icon5}/>
        </div>
      </div>
    );
  }
}

export default SevenDay;

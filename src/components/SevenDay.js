import React, {Component} from 'react';
import EachDay from './EachDay.js';

class FiveDay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const cors_api_url = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = `${cors_api_url}https://api.darksky.net/forecast/${process.env.REACT_APP_API_KEY}/33.9548,-86.0419?units=us`;
    fetch(
      apiUrl
    ).then(res => res.json())
    .then(
      (result) => {
        this.setState({
          date: result.daily.data[0].time,
          tempHigh: result.daily.data[0].temperatureHigh,
          tempLow: result.daily.data[0].temperatureLow,
          description: result.daily.data[0].summary,
          precipitation: result.daily.data[0].precipProbability,
          icon: result.daily.data[0].icon,
          date2: result.daily.data[1].time,
          tempHigh2: result.daily.data[1].temperatureHigh,
          tempLow2: result.daily.data[1].temperatureLow,
          description2: result.daily.data[1].summary,
          precipitation2: result.daily.data[1].precipProbability,
          icon2: result.daily.data[1].icon,
          date3: result.daily.data[2].time,
          tempHigh3: result.daily.data[2].temperatureHigh,
          tempLow3: result.daily.data[2].temperatureLow,
          description3: result.daily.data[2].summary,
          precipitation3: result.daily.data[2].precipProbability,
          icon3: result.daily.data[2].icon,
          date4: result.daily.data[3].time,
          tempHigh4: result.daily.data[3].temperatureHigh,
          tempLow4: result.daily.data[3].temperatureLow,
          description4: result.daily.data[3].summary,
          precipitation4: result.daily.data[3].precipProbability,
          icon4: result.daily.data[3].icon,
          date5: result.daily.data[4].time,
          tempHigh5: result.daily.data[4].temperatureHigh,
          tempLow5: result.daily.data[4].temperatureLow,
          description5: result.daily.data[4].summary,
          precipitation5: result.daily.data[4].precipProbability,
          icon5: result.daily.data[4].icon,
          date6: result.daily.data[5].time,
          tempHigh6: result.daily.data[5].temperatureHigh,
          tempLow6: result.daily.data[5].temperatureLow,
          description6: result.daily.data[5].summary,
          precipitation6: result.daily.data[5].precipProbability,
          icon6: result.daily.data[5].icon,
          date7: result.daily.data[6].time,
          tempHigh7: result.daily.data[6].temperatureHigh,
          tempLow7: result.daily.data[6].temperatureLow,
          description7: result.daily.data[6].summary,
          precipitation7: result.daily.data[6].precipProbability,
          icon7: result.daily.data[6].icon
        });
      })
  }
  render() {
    const options = {weekday: 'long'};
    return (
      <div style={{margin: '3em', color: '#2065e6'}}>
        <h4>5 Day Forecast:</h4>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gridRowGap: '5vh', gridColumnGap: '5vh', justifyContent: 'space-evenly'}}>
          <EachDay style={{gridColumn: 1}}
            date={new Date(this.state.date * 1000).toLocaleDateString('en-US', options)}
            tempHigh={this.state.tempHigh}
            tempLow={this.state.tempLow}
            description={this.state.description}
            precipitation={this.state.precipitation}
            icon={this.state.icon}/>
          <EachDay style={{gridColumn: 2}}
            date={new Date(this.state.date2 * 1000).toLocaleDateString('en-US', options)}
            tempHigh={this.state.tempHigh2}
            tempLow={this.state.tempLow2}
            description={this.state.description2}
            precipitation={this.state.precipitation2}
            icon={this.state.icon2}/>
          <EachDay style={{gridColumn: 3}}
            date={new Date(this.state.date3 * 1000).toLocaleDateString('en-US', options)}
            tempHigh={this.state.tempHigh3}
            tempLow={this.state.tempLow3}
            description={this.state.description3}
            precipitation={this.state.precipitation3}
            icon={this.state.icon3}/>
          <EachDay style={{gridColumn: 4}}
            date={new Date(this.state.date4 * 1000).toLocaleDateString('en-US', options)}
            tempHigh={this.state.tempHigh4}
            tempLow={this.state.tempLow4}
            description={this.state.description4}
            precipitation={this.state.precipitation4}
            icon={this.state.icon4}/>
          <EachDay style={{gridColumn: 5}}
            date={new Date(this.state.date5 * 1000).toLocaleDateString('en-US', options)}
            tempHigh={this.state.tempHigh5}
            tempLow={this.state.tempLow5}
            description={this.state.description5}
            precipitation={this.state.precipitation5}
            icon={this.state.icon5}/>
          <EachDay style={{gridColumn: 6}}
            date={new Date(this.state.date6 * 1000).toLocaleDateString('en-US', options)}
            tempHigh={this.state.tempHigh6}
            tempLow={this.state.tempLow6}
            description={this.state.description6}
            precipitation={this.state.precipitation6}
            icon={this.state.icon6}/>
          <EachDay style={{gridColumn: 7}}
            date={new Date(this.state.date7 * 1000).toLocaleDateString('en-US', options)}
            tempHigh={this.state.tempHigh7}
            tempLow={this.state.tempLow7}
            description={this.state.description7}
            precipitation={this.state.precipitation7}
            icon={this.state.icon7}/>
        </div>
      </div>
    );
  }
}

export default FiveDay;

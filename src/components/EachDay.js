import React, {Component} from 'react';

class EachDay extends Component{
  render() {
    const iconPrefetch = `http://openweathermap.org/img/w/${this.props.icon}.png`;
    return (
      <div>
        <ul style={{listStyleType: 'none'}}>
          <li style={{fontSize: '1.5em'}}>{this.props.date}</li>
          <li><span style={{fontSize: '3em'}}>{Math.round(this.props.temp)}&deg;F</span></li>
          <li><img src={iconPrefetch} alt="Sky Icon" width="75px" height="auto"/>{this.props.description}</li>
          <li></li>
        </ul>
      </div>
    );
  }
}

export default EachDay;

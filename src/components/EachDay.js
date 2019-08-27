import React, {Component} from 'react';

class EachDay extends Component{
  render() {
    const path = `/icons/${this.props.icon}.png`;
    return (
      <div>
        <ul style={{listStyleType: 'none'}}>
          <li style={{fontSize: '1.5em'}}>{this.props.date}</li>
          <li><img style={{marginTop: '2%'}} src={path} alt={this.props.icon} width="75px" height="auto"/></li>
          <li><span style={{fontSize: '3em'}}>{Math.round(this.props.tempHigh)}&deg;F&nbsp;/&nbsp;</span><span style={{fontSize: '2em'}}>{Math.round(this.props.tempLow)}&deg;F</span></li>
          <li>{this.props.description}</li>
        </ul>
      </div>
    );
  }
}

export default EachDay;

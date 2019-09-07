import React, { Component } from "react";

class Header extends Component {
  render() {
    const headerStyle = {
      backgroundColor: "#607d8b",
      padding: "1em 3em",
      color: "#2065e6",
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'
    };
    return (
      <div>
        <header className="App-header" style={headerStyle}>
          <h1 style={{color: 'white'}}>My Weather NOW</h1>
          <div>
            <a href="https://darksky.net" target="_blank" rel="noopener noreferrer"><img src="/img/powered_by_darksky.png" alt="Powered by Dark Sky Weather API" width="400" height="auto"/></a>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;

import React, { Component } from "react";

class Header extends Component {
  render() {
    const headerStyle = {
      backgroundColor: "lightblue",
      padding: "1em 3em",
      color: "#2065e6"
    };
    return (
      <div>
        <header className="App-header" style={headerStyle}>
          <h1>Weather NOW</h1>
        </header>
      </div>
    );
  }
}

export default Header;

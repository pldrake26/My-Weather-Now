import React, { Component } from "react";

class Header extends Component {
  render() {
    const headerStyle = {
      backgroundColor: "#607d8b",
      padding: "1em 3em",
      color: "#2065e6"
    };
    return (
      <div>
        <header className="App-header" style={headerStyle}>
          <h1 style={{color: 'white'}}>My Weather NOW</h1>
        </header>
      </div>
    );
  }
}

export default Header;

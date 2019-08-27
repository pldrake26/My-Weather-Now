import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div style={{ margin: "3em", color: "#2065e6" }}>
        <p>
          &copy;2019 - Coded by Phillip L. Drake. Data provided by&nbsp;<br/>
          <a href="https://darksky.net" target="_blank" rel="noopener noreferrer"><img src="/img/powered_by_darksky.png" alt="Powered by Dark Sky Weather API" width="400" height="auto"/></a>
        </p>
      </div>
    );
  }
}

export default Footer;

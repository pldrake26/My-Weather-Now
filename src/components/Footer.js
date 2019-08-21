import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div style={{ margin: "3em", color: "#2065e6" }}>
        <p>
          &copy;2019 - Coded by Phillip L. Drake. Data provided by{" "}
          <a href="https://openweathermap.org" target="_blank" rel="noopener noreferrer">
            OpenWeather API.
          </a>
        </p>
      </div>
    );
  }
}

export default Footer;

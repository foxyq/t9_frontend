import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Message from "./components/Message";
import PhoneForm from "./components/PhoneForm";

import logo from "./assets/phone.ico";
import Background from "./assets/phone_background.png";

import "./App.css";

var sectionStyle = {
  width: "100%",
  // height: "400px",
  backgroundImage: "url(" + { Background } + ")"
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>T9 phone keyboard simulator </h2>
        </div>
        <Router>
          <div className="t9_layout">
            <div
              className="wrapper"
              style="backgroundImage: `url(${Background})`"
            >
              <p className="App-intro">woop woop</p>
              <Message />
              <PhoneForm />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

class Section extends Component {
  render() {
    return <section style={sectionStyle} />;
  }
}

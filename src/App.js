import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Message from "./components/Message";
import PhoneMap from "./components/PhoneMap";
import PhoneForm from "./components/PhoneForm";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>T9 phone keyboard simulator </h2>
        </div>
        <Router>
          <div className="phone-wrapper">
            <div className="phone-content">
              <h2>Insert numerical input</h2>

              <PhoneForm />
              {/* <PhoneList /> */}
              <Message />
            </div>
            <PhoneMap />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

// 1. get a receive data
// 2. frontend validaca
// 3. tlacidla mobilu
// 4. ???

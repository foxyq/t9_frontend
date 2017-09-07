import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { PhoneForm, PhoneMap, Message, Results } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="App-header">
      <h2>T9 phone keyboard simulator </h2>
    </div>
    <Container>
      <Row>
        <Col md={2} className="left_col">
          Welcome! <br />
          <ol>
            <li>Use input field or phone keyboard to input numbers</li>
            <li>Submit the form</li>
            <li>Receive suggestions</li>
            <li>Search for dictionary words</li>
          </ol>
        </Col>

        <Col md={8}>
          <div className="phone-wrapper">
            <div className="phone-content">
              <h1>Insert numerical input</h1>

              <PhoneForm />
              <Message />
            </div>
            <PhoneMap />
          </div>
        </Col>

        <Col md={2} className="right_col">
          <Results />
        </Col>
      </Row>
    </Container>
  </div>
);

export default App;

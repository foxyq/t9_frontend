import React, { Component } from "react";
import { connect } from "react-redux";
import { sendNumbers, updateCurrent } from "../reducers/numbers";

class PhoneForm extends Component {
  handleInputChange = evt => {
    const val = evt.target.value;
    this.props.updateCurrent(val);
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.sendNumbers(this.props.input);
  };

  render() {
    const { input } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="number_input"
          type="text"
          onChange={this.handleInputChange}
          value={input}
        />
        <input type="submit" />
        <span>Odpoved: {this.props.apiResults}</span>
      </form>
    );
  }
}

export default connect(
  state => ({
    input: state.numbers.input,
    apiResults: state.numbers.apiResults // druhy problem
  }),
  { sendNumbers, updateCurrent }
)(PhoneForm);

import React from 'react';
import t from 'prop-types';
import { connect } from 'react-redux';
import * as numbersActions from '../reducers/numbers';
import * as messagesActions from '../reducers/messages';

import { postInput } from '../api';

const PhoneForm = ({ input, storeInput, storeResponse, showMessage }) => {
  this.handleSubmit = async (evt) => {
    evt.preventDefault();

    showMessage('Fetching suggestions from API');
    const response = await postInput(input);

    storeResponse(response);
  };

  this.handleChange = event => storeInput(event.target.value);

  return (
    <form onSubmit={this.handleSubmit}>
      <input className="number_input" type="number" onChange={this.handleChange} value={input} />
      <input type="submit" className="submit_button" />
    </form>
  );
};

PhoneForm.propTypes = {
  input: t.string.isRequired,
  storeInput: t.func.isRequired,
  storeResponse: t.func.isRequired,
  showMessage: t.func.isRequired,
};

const withData = connect(
  ({ numbers }) => ({
    input: numbers.input,
  }),
  { ...numbersActions, ...messagesActions },
);

export default withData(PhoneForm);

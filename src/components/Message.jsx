import React from 'react';
import t from 'prop-types';
import { connect } from 'react-redux';

const Message = ({ message }) => (message ? <h3 className="message">{message}</h3> : null);

Message.propTypes = {
  message: t.string.isRequired,
};

export default connect(state => ({ message: state.message }))(Message);

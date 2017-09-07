import React from 'react';
import t from 'prop-types';
import { connect } from 'react-redux';

const Results = ({ response: { words = [], suggestions = [] } }) => (
  <div>
    <h2>Words</h2>
    {words.length > 0 && words.map((word, index) => <span key={index}> - {word} </span>)}

    {suggestions.length > 0 && words.length === 0 && 'No suitable words in dictionary'}

    <div className="suggestions">
      <h2>Suggestions:</h2>
      {suggestions.length > 0 &&
        suggestions.map((suggestion, index) => (
          <span key={index}> &nbsp;&nbsp; {suggestion} </span>
        ))}
    </div>
  </div>
);

Results.propTypes = {
  response: t.shape({
    words: t.array,
    suggestion: t.array,
  }),
};

Results.defaultProps = {
  response: {
    words: [],
    suggestions: [],
  },
};

const withData = connect(({ numbers }) => ({
  response: numbers.response,
}));

export default withData(Results);

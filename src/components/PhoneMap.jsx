import React from 'react';
import t from 'prop-types';
import { connect } from 'react-redux';
import * as numbersActions from '../reducers/numbers';
import * as messagesActions from '../reducers/messages';

import { postInput } from '../api';

const PhoneMap = ({ addInput, storeInput, storeResponse, showMessage, input }) => {
  this.handleChange = (event) => {
    event.preventDefault();
    addInput(event.target.title);
  };

  this.handleSubmit = async (evt) => {
    evt.preventDefault();

    showMessage('Fetching suggestions from API');
    const response = await postInput(input);

    storeResponse(response);
  };

  this.handleErase = (event) => {
    event.preventDefault();
    storeInput('');
  };

  return (
    <div className="clickable-map">
      <map name="map_image" id="map_image">
        <area
          alt=""
          onClick={this.handleErase}
          title="ERASE"
          href="#"
          shape="poly"
          coords="98,869,145,836,237,902,181,968"
        />
        <area
          alt=""
          onClick={this.handleSubmit}
          title="SEND"
          value="11"
          href="#"
          shape="poly"
          coords="203,810,457,815,452,877,212,876"
        />
        <area
          alt=""
          onClick={this.handleChange}
          title="1"
          href="#"
          shape="poly"
          coords="81,1012,84,1086,198,1092,202,1050"
        />
        <area
          alt=""
          onClick={this.handleChange}
          title="2"
          href="#"
          shape="poly"
          coords="270,1041,260,1112,395,1114,398,1041"
        />
        <area
          alt=""
          onClick={this.handleChange}
          title="3"
          href="#"
          shape="poly"
          coords="581,1009,579,1089,455,1092,464,1022"
        />
        <area
          alt=""
          onClick={this.handleChange}
          title="4"
          href="#"
          shape="poly"
          coords="86,1116,212,1152,207,1201,94,1195"
        />
        <area
          alt=""
          onClick={this.handleChange}
          title="5"
          href="#"
          shape="poly"
          coords="260,1150,390,1149,393,1215,270,1218"
        />
        <area
          alt=""
          onClick={this.handleChange}
          title="6"
          href="#"
          shape="poly"
          coords="453,1200,452,1152,573,1113,573,1189"
        />
        <area
          alt=""
          onClick={this.handleChange}
          title="7"
          href="#"
          shape="poly"
          coords="95,1225,219,1262,216,1311,97,1304"
        />
        <area
          alt=""
          onClick={this.handleChange}
          title="8"
          href="#"
          shape="poly"
          coords="266,1260,398,1262,397,1322,281,1325"
        />
        <area
          alt=""
          onClick={this.handleChange}
          title="9"
          href="#"
          shape="poly"
          coords="442,1273,568,1213,557,1297,458,1318"
        />
        <area
          alt=""
          onClick={this.handleChange}
          title="0"
          href="#"
          shape="poly"
          coords="266,1367,260,1438,394,1444,401,1369"
        />
      </map>
      <img
        src="../assets/transparent.png"
        alt="transparent_workaround"
        className="map_image"
        width="659px"
        height="1548px"
        useMap="map_image"
      />
    </div>
  );
};

PhoneMap.propTypes = {
  input: t.string.isRequired,
  addInput: t.func.isRequired,
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

export default withData(PhoneMap);

import React, { Component } from 'react';
import firebase, { reference, signIn } from '../firebase';
import { pick, map, extend } from 'lodash';
import Application from './Application.js';

class FilterInputField extends React.Component {
  constructor(props) {
    super(props);

  }

render() {
  return (
      <input id="filter-input-field"
         type="text"
         placeholder="Filter"
         onChange={this.props.handleChange} />
       );
    }
  }

module.exports = FilterInputField;

import React, { Component } from 'react';
import firebase, { reference, signIn } from '../firebase';
import { pick, map, extend } from 'lodash';

class FilterInputField extends React.Component {
  constructor(props) {
    super(props);

  }
//had to pass the event into the function passed down from parent as a prop.
render() {
  return (
      <input id="filter-input-field"
         type="text"
         placeholder="Filter"
         onChange={(e) => this.props.handleChange(e)} />
       );
    }
  }

module.exports = FilterInputField;

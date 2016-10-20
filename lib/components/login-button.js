import React, { Component } from 'react';
import firebase, { reference, signIn } from '../firebase';
import { pick, map, extend } from 'lodash';

class LogInButton extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <button className="login-button">Log In</button>
    );
  }
} //end of LogInButton

module.exports = LogInButton;
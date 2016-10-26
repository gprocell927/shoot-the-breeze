import React, { Component } from 'react';
import firebase, { reference, signIn } from '../firebase';
import { pick, map, extend } from 'lodash';
import Application from './Application.js';


class ChatMaster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredMssgs: []
    };

  } //end of constructor

  filterMessages(user){
    let newMssgs = this.props.messages.filter((message)=>{
      return message.user === user;
    });
    this.wipeOutAllMessagesFromScreen();
    this.setState({filteredMssgs: newMssgs});
  }

  showMessages(messages){
    return(
      <div className="each-message-card">
        <p><span className="each-message-date">{messages.time}</span><span className="each-message-user-name">{messages.user}</span> <a href={"mailto:" + messages.email}>({messages.email})</a></p>
        <p className="each-message-body-text">{messages.body}</p><br/>
      </div>
    )
  }

  wipeOutAllMessagesFromScreen(){
    document.querySelector('.messages').textContent = '';
  }

  render () {
    const { messages } = this.props;
    const users = messages.map(message => message.user);
    const uniqueUsers = _.uniq(users);

    return (
      <div>
        <div className="message-output-container">
          <ul>
            <li className="messages">{messages.map(this.showMessages)}</li>
            <li>{this.state.filteredMssgs.map(this.showMessages)}</li>
          </ul>
        </div>
        <div className="user-info-container">
          <div className="users-and-filter-buttons-container">
            <h2>Users Present in the Chat Room:</h2>
            <p>
              {uniqueUsers.map(user =>
                <button id={user.substr(0, 3)} className="users-present-button" onClick={() => this.filterMessages(user)}>{user}</button>
              )}
            </p>
          </div>
        </div>
      </div> //end of main div
    );
  }
} //end of ChatMaster


module.exports = ChatMaster;

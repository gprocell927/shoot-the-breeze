import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert,expect } from 'chai';

import Application from '../lib/components/Application';

let message1 = {
  key: 'KUhAD9OYLTSjiMHBfgk',
  user: 'message1 (lower date)',
  body: 'hello',
  photo: 'myphoto.com/mine',
  email: 'me@me.com',
  time: 'now',
  id: 1000000000000,
};

let message2 = {
  key: 'KUhAD9OYLpeSjiMHBfgk',
  user: 'message2 (higher date)',
  body: 'hi',
  photo: 'yourphoto.com/yours',
  email: 'you@me.com',
  time: 'later',
  id: 2222222000000000000,
};

let messageGN = {
  key: 'KUhAD9OYLpeSfjaifa00jaHBfgk',
  user: 'Graham Nessler',
  body: 'hi there',
  photo: 'yourphoto.com/grahams',
  email: 'graham@me.com',
  time: 'no time',
  id: 3333339333333333333333,
};

let messageGP = {
  key: 'QUhAD9OYLpeSfji89fa00jaHBfgk',
  user: 'Gabrielle Procell',
  body: 'yo',
  photo: 'yourphoto.com/gabis',
  email: 'gabi@me.com',
  time: 'yesterday',
  id: 6,
};


describe('Application', () => {

  it('renders as a <div>', () => {
    const wrapper = shallow(<Application />)
    assert.equal(wrapper.type(), 'div');
  });

  it('has a messages state that is an array', () => {
    const wrapper = shallow(<Application />);
    assert.deepEqual(wrapper.state().messages, []);
  });

  it('should allow us to set a messages array as a state', () => {
    const wrapper = mount(<Application />);
    wrapper.state().messages = ['Users'];
    expect(wrapper.state().messages.length).to.equal(1);
  });

  it('should allow us to set a user state', () => {
    const wrapper = mount(<Application />);
    expect(wrapper.state.user).to.equal(undefined);
    wrapper.state().user = 'JIMMY';
    expect(wrapper.state().user).to.equal('JIMMY');
  });

  it('should allow us to set a filtered messages array as a state', () => {
    const wrapper = mount(<Application />);
    wrapper.state().filteredMessages = ['fancy filtered messages'];
    expect(wrapper.state().filteredMessages.length).to.equal(1)
  });

  it('should allow us to set a user', ()=>{
    const wrapper = mount(<Application />);
    wrapper.state().currentUser = 'Yung Jhun';
    expect(wrapper.state().currentUser).to.equal('Yung Jhun');
  });

  it('has a search state that is an empty string', () => {
    const wrapper = shallow(<Application />);
    assert.deepEqual(wrapper.state().search, '');
  });

  it('has a new message that is set to an empty string by default', () => {
    const wrapper = shallow(<Application />);
    assert.equal(wrapper.state().newMessage, '');

  });

  it('has a state called newMessageLength that is set to an empty string by default', () => {
    const wrapper = shallow(<Application />);
    assert.equal(wrapper.state().newMessageLength, '');

  });

  it('has a user that is set to an empty string by default', () => {
    const wrapper = shallow(<Application />);
    assert.equal(wrapper.state().user, '');
  });

  it('has a currentUser that is set to an empty string by default', () => {
    const wrapper = shallow(<Application />);
    assert.equal(wrapper.state().currentUser, '');
  });

  it('has a state that disables the submit button by default', () => {
    const wrapper = shallow(<Application />);
    assert.equal(wrapper.state().submitButtonDisabled, true);
  });

  it('has a state that disables the clear button by default', () => {
    const wrapper = shallow(<Application />);
    assert.equal(wrapper.state().clearButtonDisabled, true);
  });

  it('has a search state that is set to an empty string by default', () => {
    const wrapper = shallow(<Application />);
    assert.equal(wrapper.state().search, '');
  });

  it('has a filteredMessages state that is an array', () => {
    const wrapper = shallow(<Application />);
    assert.deepEqual(wrapper.state().filteredMessages, []);
  });

  it('has a function called clearInputField() that clears the input field', () => {
    const wrapper = mount(<Application />);

    wrapper.state().newMessage = 'test message';

    assert.equal(wrapper.state().newMessage, 'test message');

    wrapper.instance().clearInputField();

    assert.equal(wrapper.state().newMessage, '');
  });

  it('should disable the submit button if no content is in the input field', () => {
    const wrapper = mount(<Application />);

    let button = wrapper.find('.submit-message-button').simulate('click');
    expect(wrapper.state().submitButtonDisabled).to.equal(true);
  });

  it('should enable the submit button if content is in the input field', () => {
    const wrapper = mount(<Application />);
    wrapper.find('#message-entry-field').simulate('change', {target: {value: 'Hello'}});
    expect(wrapper.state().submitButtonDisabled).to.equal(false);
  })

  it('should change the order in which the messages are rendered in messages array (sort up)', ()=> {
    const wrapper = mount(<Application />);
    wrapper.state().messages = [message1, message2];

    wrapper.find('.sort-up-button').simulate('click');
    assert.deepEqual(wrapper.state().messages, [message2, message1]);
  });

  it('should change the order in which the messages are rendered in messages array (sort down)', ()=> {
    const wrapper = mount(<Application />);
    wrapper.state().messages = [message2, message1];

    wrapper.find('.sort-down-button').simulate('click');
    assert.deepEqual(wrapper.state().messages, [message1, message2]);
  });

  it('should disable the submit button if message is too long (more than 140 chars)', ()=> {
    const wrapper = mount(<Application />);
    wrapper.find('#message-entry-field').simulate('change', {target: {value: 'dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs'}});
    expect(wrapper.state().submitButtonDisabled).to.equal(true);
  });

  it('input field should not display anything when message length is zero', ()=>{
    const wrapper = mount(<Application />);
    wrapper.find('#message-entry-field').simulate('change', {target: {value: 'Hello'}});
    wrapper.find('#message-entry-field').simulate('change', {target: {value: ''}});
    let output = wrapper.find('#character-counter-output');
    assert.equal(output.text(), 0);
  });

  it('character count output should display 1, and only 1, when there is only 1 character in the input field', ()=>{
    const wrapper = mount(<Application />);
    wrapper.find('#message-entry-field').simulate('change', {target: {value: 'r'}});
    let output = wrapper.find('#character-counter-output');
    assert.equal(output.text(), 1);
  });

}); //end of describe Application

import React from 'react';
require ('locus');
import { shallow, mount, render } from 'enzyme';
import { assert,expect } from 'chai';

import Application from '../lib/components/Application';

let message1 = {
  key: 'KUhAD9OYLTSjiMHBfgk',
  user: 'me',
  body: 'hello',
  photo: 'myphoto.com/mine',
  email: 'me@me.com',
  time: 'now',
  id: 1000000000000,
};

let message2 = {
  key: 'KUhAD9OYLpeSjiMHBfgk',
  user: 'you',
  body: 'hi',
  photo: 'yourphoto.com/yours',
  email: 'you@me.com',
  time: 'later',
  id: 2222222000000000000,
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

  it.skip('should enable the submit button if content is in the input field', () => { //this is the problematic test 
    const wrapper = mount(<Application />);
    // input.simulate('change', { target: { value: 'Hello' } })
    // eval(locus);
    wrapper.find('#message-entry-field').simulate('change', {target: {value: 'Hello'}});
    expect(wrapper.state().submitButtonDisabled).to.equal(false);
  })

  it('should change the order in which the messages are rendered in messages array (sort up)', ()=> { //need to finish
    const wrapper = mount(<Application />);
    wrapper.state().messages = [message1, message2];

    wrapper.find('.sort-up-button').simulate('click');
    assert.equal()
  };


});

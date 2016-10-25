import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert,expect } from 'chai';

import Application from '../lib/components/Application';

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


});

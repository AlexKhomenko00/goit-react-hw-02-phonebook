import React, { Component } from 'react';
import { connect } from 'react-redux';

import phonebookOperations from '../../redux/phonebook/phonebookOperations';

import ContactForm from './ContactForm';

const INITITAL_STATE = {
  name: '',
  number: '',
};

class ContactFormContainer extends Component {
  state = INITITAL_STATE;

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onAddContact(name, number);
    this.resetValue();
  };

  resetValue = () => {
    this.setState(INITITAL_STATE);
  };

  render() {
    return (
      <ContactForm
        {...this.props}
        {...this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const MDTP = {
  onAddContact: phonebookOperations.addContact,
};

export default connect(null, MDTP)(ContactFormContainer);

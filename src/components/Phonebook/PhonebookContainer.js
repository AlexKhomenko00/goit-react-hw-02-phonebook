import React, { Component } from 'react';
import { connect } from 'react-redux';

import { phonebookSelectors, phonebookOperations } from '../../redux/phonebook';

import Phonebook from './Phonebook';

class PhonebookContainer extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    const isShowFilter = this.props.contacts.length > 1;
    const isShowContactsList = this.props.contacts.length > 0;

    return (
      <Phonebook
        isShowFilter={isShowFilter}
        isShowContactsList={isShowContactsList}
      />
    );
  }
}

const MSTP = state => ({
  contacts: phonebookSelectors.getAllContacts(state),
});

const MDTP = {
  fetchContacts: phonebookOperations.fetchContacts,
};

export default connect(MSTP, MDTP)(PhonebookContainer);

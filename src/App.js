import React, { Component } from 'react';
import { connect } from 'react-redux';

import phonebookOperations from './redux/phonebook/phonebookOperations';
import phonebookSelectors from './redux/phonebook/phonebookSelectors';

import { NotificationContainer } from 'react-notifications';
import Section from './components/Section';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

class App extends Component {
  componentDidMount() {
    this.props.fetchContact();
  }

  render() {
    const isShowFilter = this.props.contacts.length > 1;
    const isShowContactsList = this.props.contacts.length > 0;

    return (
      <>
        <Section title="Phonebook">
          <ContactForm />
        </Section>
        <Section title="Contacts">
          {isShowFilter && <Filter />}
          {isShowContactsList && <ContactList />}
        </Section>
        <NotificationContainer />
      </>
    );
  }
}

const MSTP = state => ({
  contacts: phonebookSelectors.getAllContacts(state),
});
const MDTP = {
  fetchContact: phonebookOperations.fetchContact,
};

export default connect(MSTP, MDTP)(App);

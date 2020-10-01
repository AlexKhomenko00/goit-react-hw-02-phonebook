import React, { Component } from 'react';
import { connect } from 'react-redux';

import phonebookActions from './redux/phonebook/phonebookActions';

import { NotificationContainer } from 'react-notifications';
import Section from './components/Section';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

class App extends Component {
  state = {
    isShowAlert: false,
  };

  componentDidMount() {
    const persistedContacts = localStorage.getItem('contacts');

    if (persistedContacts) {
      this.props.onUpdateFromLS(JSON.parse(persistedContacts));
    }
  }

  componentDidUpdate({ contacts }) {
    if (contacts !== this.props.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.props.contacts));
    }
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

const MSTP = ({ phonebook }) => ({
  contacts: phonebook.contacts,
});
const MDTP = {
  onUpdateFromLS: phonebookActions.updateFromLocaleStorage,
};

export default connect(MSTP, MDTP)(App);

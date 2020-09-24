import React, { Component } from 'react';

import { v4 as uuidv4 } from 'uuid';
import { CSSTransition } from 'react-transition-group';

import Section from './components/Section';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import Alert from './components/Alert';

import fadeFilter from './css/fadeFilter.module.css';
import fadeAlert from './css/fadeAlert.module.css';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
    isShowAlert: false,
  };

  componentDidMount() {
    const persistedContacts = localStorage.getItem('contacts');
    if (persistedContacts) {
      this.setState({
        contacts: JSON.parse(persistedContacts),
      });
    }
  }

  componentDidUpdate(prevProps, { contacts }) {
    if (contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  changeFilter = filter => {
    this.setState({ filter });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  addContact = (name, number) => {
    if (this.state.contacts.find(contact => contact.name === name)) {
      this.setState({ isShowAlert: true });
      setTimeout(() => this.setState({ isShowAlert: false }), 2500);
      return;
    }

    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  removeContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter, isShowAlert } = this.state;
    const visibleContacts = this.getVisibleContacts();
    const isShowFilter = contacts.length > 1;

    return (
      <>
        <CSSTransition
          in={isShowAlert}
          classNames={fadeAlert}
          timeout={250}
          unmountOnExit
        >
          <Alert />
        </CSSTransition>
        <Section title="Phonebook">
          <ContactForm onAddContact={this.addContact} />
        </Section>
        <Section title="Contacts">
          <CSSTransition
            in={isShowFilter}
            timeout={300}
            classNames={fadeFilter}
            unmountOnExit
          >
            <Filter value={filter} onChangeFilter={this.changeFilter} />
          </CSSTransition>
          <ContactList
            contacts={visibleContacts}
            onRemoveContact={this.removeContact}
          />
        </Section>
      </>
    );
  }
}

import React, { Component } from 'react';

import { v4 as uuidv4 } from 'uuid';

import Section from './components/Section';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

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
      alert(`${name} already in contacts!`);
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
    const { contacts, filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    const isShowFilter = contacts.length > 1;
    const isShowContactList = contacts.length > 0;
    return (
      <>
        <Section title="Phonebook">
          <ContactForm onAddContact={this.addContact} />
        </Section>
        <Section title="Contacts">
          {isShowFilter && (
            <Filter value={filter} onChangeFilter={this.changeFilter} />
          )}
          {isShowContactList && (
            <ContactList
              contacts={visibleContacts}
              onRemoveContact={this.removeContact}
            />
          )}
        </Section>
      </>
    );
  }
}

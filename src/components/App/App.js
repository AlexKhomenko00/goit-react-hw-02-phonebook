import React from 'react';

import { NotificationContainer } from 'react-notifications';
import Section from '../Section';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import Error from '../Error';

const App = props => {
  const isShowFilter = props.contacts.length > 1;
  const isShowContactsList = props.contacts.length > 0;

  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      {props.err ? (
        <Error />
      ) : (
        <Section title="Contacts">
          {isShowFilter && <Filter />}
          {isShowContactsList && <ContactList />}
        </Section>
      )}

      <NotificationContainer />
    </>
  );
};

export default App;

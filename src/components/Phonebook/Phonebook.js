import React from 'react';
import Section from '../Section';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';

const Phonebook = ({ isShowFilter = true, isShowContactsList = true }) => (
  <>
    <Section title="Phonebook">
      <ContactForm />
    </Section>
    <Section title="Contacts">
      {isShowFilter && <Filter />}
      {isShowContactsList && <ContactList />}
    </Section>
  </>
);

export default Phonebook;

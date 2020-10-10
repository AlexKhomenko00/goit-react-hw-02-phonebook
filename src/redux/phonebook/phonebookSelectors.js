import { createSelector } from '@reduxjs/toolkit';

const getAllContacts = state => state.phonebook.contacts;

const getFilterValue = state => state.phonebook.filter;

const getVisibleContacts = createSelector(
  [getAllContacts, getFilterValue],
  (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    ),
);

export default {
  getAllContacts,
  getFilterValue,
  getVisibleContacts,
};

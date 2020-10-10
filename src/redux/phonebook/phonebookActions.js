import phonebookTypes from './phonebookTypes';
import { createAction } from '@reduxjs/toolkit';

const addContactStart = createAction('phonebook/addContactStart');
const addContactSuccess = createAction('phonebook/addContactSuccess');
const addContactError = createAction('phonebook/addContactError');

const fetchContactStart = createAction('phonebook/fetchContactStart');
const fetchContactSuccess = createAction('phonebook/fetchContactSuccess');
const fetchContactError = createAction('phonebook/fetchContactError');

const removeContactStart = createAction('phonebook/removeContactStart');
const removeContactSuccess = createAction('phonebook/removeContactSuccess');
const removeContactError = createAction('phonebook/removeContactError');

const changeFilter = createAction(phonebookTypes.CHANGE_FILTER);

export default {
  changeFilter,
  addContactStart,
  addContactSuccess,
  addContactError,
  removeContactStart,
  removeContactSuccess,
  removeContactError,
  fetchContactStart,
  fetchContactSuccess,
  fetchContactError,
};

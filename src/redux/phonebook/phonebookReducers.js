import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import phonebookActions from './phonebookActions';

import Alert from '../../components/Alert';

const addContact = (state, { payload }) => {
  if (state.find(contact => contact.name === payload.contact.name)) {
    Alert(payload.contact.name);
    return state;
  }
  return [...state, payload.contact];
};

const contacts = createReducer([], {
  [phonebookActions.addContact]: addContact,
  [phonebookActions.removeContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
  [phonebookActions.updateFromLocaleStorage]: (state, { payload }) => payload,
});

const filter = createReducer('', {
  [phonebookActions.changeFilter]: (state, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});

import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import phonebookActions from './phonebookActions';

const contacts = createReducer([], {
  [phonebookActions.addContactSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [phonebookActions.removeContactSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
  [phonebookActions.fetchContactSuccess]: (state, { payload }) => payload,
});

const filter = createReducer('', {
  [phonebookActions.changeFilter]: (state, { payload }) => payload,
});

const error = (state = null, { type, payload }) => {
  switch (type) {
    case (phonebookActions.addContactError,
    phonebookActions.fetchContactError,
    phonebookActions.removeContactError):
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  contacts,
  filter,
  error,
});

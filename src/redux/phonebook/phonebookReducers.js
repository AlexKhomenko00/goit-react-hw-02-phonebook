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

export default combineReducers({
  contacts,
  filter,
});

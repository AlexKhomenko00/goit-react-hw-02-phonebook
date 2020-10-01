import { v4 as uuidv4 } from 'uuid';
import phonebookTypes from './phonebookTypes';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction(phonebookTypes.ADD, (name, number) => ({
  payload: {
    contact: { id: uuidv4(), name, number },
  },
}));

const updateFromLocaleStorage = createAction(phonebookTypes.UPDATE_FROM_LS);

const removeContact = createAction(phonebookTypes.REMOVE);

const changeFilter = createAction(phonebookTypes.CHANGE_FILTER);

export default {
  addContact,
  removeContact,
  changeFilter,
  updateFromLocaleStorage,
};

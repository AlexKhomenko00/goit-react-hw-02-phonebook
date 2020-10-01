import phonebookReducers from './phonebook/phonebookReducers';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    phonebook: phonebookReducers,
  },
});

export default store;

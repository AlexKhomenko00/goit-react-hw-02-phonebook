import phonebookReducers from './phonebook/phonebookReducers';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    phonebook: phonebookReducers,
  },
  middleware: [...getDefaultMiddleware()],
});

export default store;

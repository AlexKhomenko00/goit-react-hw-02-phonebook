import axios from 'axios';
import phonebookActions from './phonebookActions';

import Alert from '../../components/Alert';

const addContact = (name, number) => (dispatch, getState) => {
  dispatch(phonebookActions.addContactStart());

  const { phonebook } = getState();

  if (phonebook.contacts.find(contact => contact.name === name)) {
    Alert(name);
    return;
  }

  axios
    .post('http://localhost:2000/contacts', { name, number })
    .then(res => dispatch(phonebookActions.addContactSuccess(res.data)))
    .catch(err => dispatch(phonebookActions.addContactError(err)));
};

const removeContact = id => dispatch => {
  dispatch(phonebookActions.removeContactStart());

  axios
    .delete(`http://localhost:2000/contacts/${id}`)
    .then(() => dispatch(phonebookActions.removeContactSuccess(id)))
    .catch(err => dispatch(phonebookActions.removeContactError(err)));
};

const fetchContact = () => dispatch => {
  dispatch(phonebookActions.fetchContactStart());

  axios
    .get('http://localhost:2000/contacts/')
    .then(({ data }) => dispatch(phonebookActions.fetchContactSuccess(data)))
    .catch(err => dispatch(phonebookActions.fetchContactError(err)));
};

export default {
  addContact,
  removeContact,
  fetchContact,
};

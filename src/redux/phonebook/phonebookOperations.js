import axios from 'axios';
import phonebookActions from './phonebookActions';

import Alert from '../../components/Alert';

const fetchContacts = () => async dispatch => {
  dispatch(phonebookActions.fetchContactStart());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(phonebookActions.fetchContactSuccess(data));
  } catch (error) {
    dispatch(phonebookActions.fetchContactError(error));
  }
};

const addContact = contact => (dispatch, getState) => {
  dispatch(phonebookActions.addContactStart());
  const { phonebook } = getState();

  if (phonebook.contacts.find(({ name }) => name === contact.name)) {
    Alert(contact.name);
    return;
  }

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(phonebookActions.addContactSuccess(data)))
    .catch(err => dispatch(phonebookActions.addContactError(err)));
};

const removeContact = contactId => dispatch => {
  dispatch(phonebookActions.removeContactStart());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(phonebookActions.removeContactSuccess(contactId)))
    .catch(error =>
      dispatch(phonebookActions.removeContactError(error.message)),
    );
};

export default {
  addContact,
  removeContact,
  fetchContacts,
};

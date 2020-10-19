import { connect } from 'react-redux';

import { phonebookOperations, phonebookSelectors } from '../../redux/phonebook';

import ContactList from './ContactList';

const MSTP = state => ({
  contacts: phonebookSelectors.getVisibleContacts(state),
});
const MDTP = {
  onRemoveContact: phonebookOperations.removeContact,
};

export default connect(MSTP, MDTP)(ContactList);

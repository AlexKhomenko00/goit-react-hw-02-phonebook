import { connect } from 'react-redux';

import phonebookOperations from '../../redux/phonebook/phonebookOperations';
import phonebookSelectors from '../../redux/phonebook/phonebookSelectors';

import ContactList from './ContactList';

const MSTP = state => ({
  contacts: phonebookSelectors.getVisibleContacts(state),
});
const MDTP = {
  onRemoveContact: phonebookOperations.removeContact,
};

export default connect(MSTP, MDTP)(ContactList);

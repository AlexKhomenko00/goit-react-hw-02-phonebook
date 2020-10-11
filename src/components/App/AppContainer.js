import React, { Component } from 'react';
import { connect } from 'react-redux';

import phonebookOperations from '../../redux/phonebook/phonebookOperations';
import phonebookSelectors from '../../redux/phonebook/phonebookSelectors';

import App from './App';

class AppContainer extends Component {
  componentDidMount() {
    this.props.fetchContact();
  }
  render() {
    return <App {...this.props} />;
  }
}

const MSTP = state => ({
  contacts: phonebookSelectors.getAllContacts(state),
  err: phonebookSelectors.getError(state),
});
const MDTP = {
  fetchContact: phonebookOperations.fetchContact,
};

export default connect(MSTP, MDTP)(AppContainer);

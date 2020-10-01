import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';

import phonebookActions from '../../redux/phonebook/phonebookActions';

import s from './ContactList.module.css';
import fadeContact from './fade.module.css';

const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <TransitionGroup component="ul" className={s.contacts}>
      {contacts.map(({ id, name, number }) => (
        <CSSTransition
          key={id}
          classNames={fadeContact}
          timeout={250}
          appear={true}
        >
          <li className={s.contact}>
            <p>
              <span> {name}:</span> <span>{number}</span>
            </p>
            <div>
              <button type="button" onClick={() => onRemoveContact(id)}>
                Delete
              </button>
            </div>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};

const MSTP = ({ phonebook }) => ({
  contacts: phonebook.contacts.filter(contact =>
    contact.name.toLowerCase().includes(phonebook.filter.toLowerCase()),
  ),
});
const MDTP = {
  onRemoveContact: phonebookActions.removeContact,
};

export default connect(MSTP, MDTP)(ContactList);

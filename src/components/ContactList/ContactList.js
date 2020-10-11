import React from 'react';
import PropTypes from 'prop-types';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import s from './ContactList.module.css';
import fadeContact from './fade.module.css';

const ContactList = ({ contacts, onRemoveContact }) => (
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

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};

export default ContactList;

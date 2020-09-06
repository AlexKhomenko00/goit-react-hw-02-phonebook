import React from 'react';
import PropTypes from 'prop-types';

import s from './ContactList.module.css';

const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <ul className={s.contacts}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.contact} key={id}>
          <p>
            <span> {name}:</span> <span>{number}</span>
          </p>
          <section>
            <button type="button" onClick={() => onRemoveContact(id)}>
              Удалить
            </button>
          </section>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};

export default ContactList;

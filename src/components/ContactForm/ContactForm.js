import React from 'react';

import s from './ContactForm.module.css';

const ContactForm = ({ name, number, handleChange, handleSubmit }) => (
  <form className={s.contactUs} onSubmit={handleSubmit}>
    <label>
      Name
      <input
        type="text"
        name="name"
        value={name}
        className={s.ContactFormInput}
        required
        onChange={handleChange}
      ></input>
    </label>
    <label>
      Number
      <input
        type="tel"
        pattern="(\+?\d[- .]*){7,13}"
        name="number"
        required
        className={s.ContactFormInput}
        value={number}
        onChange={handleChange}
      ></input>
    </label>
    <button type="submit">Add contact</button>
  </form>
);

export default ContactForm;

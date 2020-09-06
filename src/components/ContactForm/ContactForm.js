import React, { Component } from 'react';

import s from './ContactForm.module.css';

class ContactFrom extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onAddContact(name, number);
    this.resetValue();
  };
  resetValue = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    const { name, number } = this.state;
    return (
      <form className={s.contactUs} onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            className={s.ContactFormInput}
            required
            onChange={this.handleChange}
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
            onChange={this.handleChange}
          ></input>
        </label>
        <button className={s.ContactFormButton} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
export default ContactFrom;

import React from 'react';

import s from './Register.module.css';

const Register = ({ handleChange, handleSubmit, name, email, password }) => (
  <form className={s.RegisterForm} onSubmit={handleSubmit}>
    <label>
      Name
      <input
        type="text"
        name="name"
        value={name}
        className={s.RegisterFormInput}
        required
        onChange={handleChange}
      ></input>
    </label>
    <label>
      Email
      <input
        type="email"
        name="email"
        value={email}
        className={s.RegisterFormInput}
        required
        onChange={handleChange}
      ></input>
    </label>
    <label>
      Password
      <input
        type="password"
        name="password"
        required
        className={s.RegisterFormInput}
        value={password}
        onChange={handleChange}
      ></input>
    </label>
    <button type="submit">Login</button>
  </form>
);

export default Register;

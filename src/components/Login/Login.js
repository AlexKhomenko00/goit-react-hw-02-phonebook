import React from 'react';

import s from './Login.module.css';

const Login = ({ handleChange, handleSubmit, email, psw }) => (
  <form className={s.LoginForm} onSubmit={handleSubmit}>
    <label>
      Login
      <input
        type="email"
        name="email"
        value={email}
        className={s.LoginFormInput}
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
        autoComplete="true"
        className={s.LoginFormInput}
        value={psw}
        onChange={handleChange}
      ></input>
    </label>
    <button type="submit">Login</button>
  </form>
);

export default Login;

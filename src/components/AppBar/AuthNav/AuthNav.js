import React from 'react';
import { NavLink } from 'react-router-dom';

import s from '../Link.module.css';

const AuthNav = () => (
  <div>
    <NavLink
      to="/register"
      exact
      className={s.link}
      activeClassName={s.linkActiv}
    >
      Регистрация
    </NavLink>
    <NavLink to="/login" exact className={s.link} activeClassName={s.linkActiv}>
      Логин
    </NavLink>
  </div>
);

export default AuthNav;

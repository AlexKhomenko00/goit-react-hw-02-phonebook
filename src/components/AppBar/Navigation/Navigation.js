import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../../../redux/auth';
import s from '../Link.module.css';

const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink to="/" exact className={s.link} activeClassName={s.linkActiv}>
      Главная
    </NavLink>

    {isAuthenticated && (
      <NavLink
        to="/contacts"
        exact
        className={s.link}
        activeClassName={s.linkActiv}
      >
        Телефонная книга
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);

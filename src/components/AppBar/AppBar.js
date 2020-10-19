import React from 'react';
import { connect } from 'react-redux';

import { authSelectors } from '../../redux/auth';

import Navigation from './Navigation/Navigation';
import UserMenu from '../UserMenu';
import AuthNav from './AuthNav/AuthNav';

import s from './AppBar.module.css';

const AppBar = ({ isAuthenticated }) => (
  <header className={s.header}>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);

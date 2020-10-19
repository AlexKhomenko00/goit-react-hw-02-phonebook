import React from 'react';

import s from './UserMenu.module.css';

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className={s.container}>
    <img src={avatar} alt="" width="52" className={s.avatar} />
    <span className={s.name}>Welcome, {name}</span>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);

export default UserMenu;

import React from 'react';

import Section from '../Section';

import mainBanner from './main-banner.png';

import s from './Home.module.css';

const Home = () => (
  <Section title="Welcome to Phonebook Application!">
    <img
      className={s.banner}
      src={mainBanner}
      with="100"
      height="200"
      alt="phonebook illustration"
    />
    <div className={s.mainDescription}>
      <p>
        <span className={s.emphasize}>Phonebook</span> aplication is the Redux
        based React application, that enables to create user with his
        personalised phonebook.
      </p>
      <p>
        The aplication build with the help of various modern technologies, such
        as React Routes (with specified Public and Private routes),
        Lazy-loading, Redux-Persist, React-Transition-Group{' '}
        <span className={s.etCetera}>et cetera</span> .
      </p>
      <p className={s.postScriptum}>
        {' '}
        I hope you enjoy it{' '}
        <span role="img" aria-label="funny face">
          😊
        </span>{' '}
      </p>
    </div>
  </Section>
);

export default Home;

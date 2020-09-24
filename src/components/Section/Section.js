import React from 'react';
import PropTypes from 'prop-types';

import { CSSTransition } from 'react-transition-group';

import s from './Section.module.css';
import fadeTransition from './fade.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={s.section}>
      {title && (
        <CSSTransition
          in={true}
          appear={true}
          classNames={fadeTransition}
          timeout={500}
        >
          <h2 className={s.title}>{title}</h2>
        </CSSTransition>
      )}
      {children}
    </section>
  );
};

Section.defaultProps = {
  title: '',
};
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;

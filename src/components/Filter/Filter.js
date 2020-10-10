import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import phonebookActions from '../../redux/phonebook/phonebookActions';
import phonebookSelectors from '../../redux/phonebook/phonebookSelectors';

import s from './Filter.module.css';
import fadeFilter from './fadeFilter.module.css';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <CSSTransition
      in={true}
      timeout={300}
      classNames={fadeFilter}
      unmountOnExit
    >
      <input
        className={s.filterFormInput}
        type="text"
        placeholder="Find contacts by name..."
        value={value}
        onChange={({ target }) => onChangeFilter(target.value)}
      />
    </CSSTransition>
  );
};

Filter.defaultProps = {
  value: '',
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

const MSTP = state => ({
  value: phonebookSelectors.getFilterValue(state),
});

const MDTP = {
  onChangeFilter: phonebookActions.changeFilter,
};

export default connect(MSTP, MDTP)(Filter);

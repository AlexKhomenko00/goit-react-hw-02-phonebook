import React from 'react';
import PropTypes from 'prop-types';

import s from './Filter.module.css';

const Filter = ({ value, onChangeFilter }) => (
  <input
    className={s.filterFormInput}
    type="text"
    placeholder="Find contacts by name..."
    value={value}
    onChange={({ target }) => onChangeFilter(target.value)}
  />
);

Filter.defaultProps = {
  value: '',
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;

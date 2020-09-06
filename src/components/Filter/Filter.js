import React from 'react';
import PropTypes from 'prop-types';

import s from './Filter.module.css';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <>
      <input
        className={s.filterFormInput}
        type="text"
        placeholder="Find contacts by name..."
        value={value}
        onChange={e => onChangeFilter(e.target.value)}
      ></input>
    </>
  );
};

Filter.defaultProps = {
  value: '',
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
  // Немного глупый вопрос.
  // В данном случаи функция является обязательной или нет?🧐
};

export default Filter;

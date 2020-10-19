import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import { phonebookActions, phonebookSelectors } from '../../redux/phonebook';

import Filter from './Filter';

import fadeFilter from './fadeFilter.module.css';

const FilterContainer = props => (
  <CSSTransition in={true} timeout={300} classNames={fadeFilter} unmountOnExit>
    <Filter {...props} />
  </CSSTransition>
);

const MSTP = state => ({
  value: phonebookSelectors.getFilterValue(state),
});

const MDTP = {
  onChangeFilter: phonebookActions.changeFilter,
};

export default connect(MSTP, MDTP)(FilterContainer);

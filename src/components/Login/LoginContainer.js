import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';

import Login from './Login';
import Section from '../Section';

const INIT_STATE = {
  email: '',
  password: '',
};

class LoginContainer extends Component {
  state = INIT_STATE;

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);
    this.resetValue();
  };

  resetValue() {
    this.setState(INIT_STATE);
  }

  render() {
    const { email, password } = this.state;
    return (
      <Section title="Login">
        <Login
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          email={email}
          psw={password}
        />
      </Section>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginContainer);

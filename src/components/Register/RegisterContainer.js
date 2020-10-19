import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';

import Register from './Register';
import Section from '../Section';

const INIT_STATE = {
  name: '',
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
    console.log(this.state);
    this.props.onRegister(this.state);
    this.resetValue();
  };

  resetValue() {
    this.setState(INIT_STATE);
  }

  render() {
    const { name, password, email } = this.state;
    return (
      <Section title="Register">
        <Register
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          name={name}
          email={email}
          psw={password}
        />
      </Section>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(LoginContainer);

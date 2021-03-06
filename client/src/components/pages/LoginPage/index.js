import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Login from '../../Login';

class LoginPage extends Component {
  render() {
    const { loggedIn } = this.props;

    if (loggedIn) {
      return <Redirect to="/" />;
    }

    return <Login />;
  }
}

const mapStateToProps = (state) => {
  const { loggedIn } = state.authentication;
  return {
    loggedIn
  };
};

export default connect(mapStateToProps)(LoginPage);

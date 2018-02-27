import React, { Component } from 'react';
import axios from 'axios';

class LoginButton extends Component {

  render() {
    return (
      <div className="btn-group" id={this.props.id} role="group" aria-label="login and logout buttons">
      <button type="button" className="btn btn-secondary">Login/Register</button>
      <button type="button" className="btn btn-secondary">Logout</button>
    </div>
    );
  }
}

export default LoginButton;

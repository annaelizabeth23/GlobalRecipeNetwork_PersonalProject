import React, { Component } from 'react';
import axios from 'axios';

class LoginButton extends Component {
constructor() {
  super();
  this.state = {
    user: null
  };
  this.logout = this.logout.bind(this);
}

login() {
  window.location = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/login?client=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${encodeURIComponent(window.location.origin)}/auth/callback`
}

logout() {
  axios.post('/api/logout').then(() => {
    this.setState({user : null});
  });
}


  render() {
    
    return (
      <div className="btn-group" id={this.props.id} role="group" aria-label="login and logout buttons">
      <button type="button" className="btn btn-secondary" onClick={this.login}>Login/Register</button>
      <button type="button" className="btn btn-secondary" onClick={this.logout}>Logout</button>
      
    </div>
    );
  }
}

export default LoginButton;

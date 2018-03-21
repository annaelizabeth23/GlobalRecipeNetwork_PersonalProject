import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import { fetchUserData } from '../reducer'
import {logoutUser} from '../reducer';
import {Link} from 'react-router-dom';

class LoginButton extends Component {
  constructor() {
    super();
    this.state= {
        
    }
  }

login() {
  window.location = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/login?client=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${encodeURIComponent(window.location.origin)}/auth/callback`
}

logout() {
  console.log("logged out fired");
  axios.post('/api/logout').then((response) => {
    this.props.logoutUser(response.data.user);
    console.log('logged out user');
  });
}

guestLogin() {
  console.log("test login function on LoginButton component");
  axios.get('/api/guestLogin').then((response) => {
  this.props.fetchUserData(response.data.user);
  
  })
}


  render() {
    
    return (
      <div className="btn-group flex-column" id={this.props.id} role="group" aria-label="login and logout buttons">
      <button type="button" className="btn btn-secondary btn-sm" onClick={this.login}>Login/Register</button>
      <button type="button" className="btn btn-secondary btn-sm" onClick={this.logout.bind(this)}>Logout</button>
      <Link to="/"><button type="button" className="btn btn-secondary btn-sm" onClick={this.guestLogin.bind(this)}>Guest/Test Login</button></Link>
    </div>
    );
  }
}

const mapStateToProps = store => {
  return {
      user: store.user
  };
};

const mapDispatchToProps = {
  fetchUserData: fetchUserData,
  logoutUser: logoutUser
  //the fetchUserData is the action creator and we are setting it to the key
  //we are sending this to connect. redux wraps all of our action creators with a dispatch which will run the function on the reducer
}

const connector = connect(mapStateToProps, mapDispatchToProps);
const connectedLoginButton = connector(LoginButton);

export default connectedLoginButton;

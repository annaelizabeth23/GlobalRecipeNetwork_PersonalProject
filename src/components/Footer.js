import React, { Component } from 'react';
import LoginButton from './LoginButton';
import {Link} from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div className="footer-top-level">
        <nav className="navbar navbar-expand-lg navbar-light">
          <p className="footer-text">Global Recipe Network is brought to you by Anna Lewandowski</p>
        </nav>
      </div>
    );
  }
}

export default Footer;

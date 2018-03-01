import React, { Component } from 'react';
import LoginButton from './LoginButton';
import {Link} from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div className="footer-top-level">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#"><h1 className="header-text"><span id="header-first-letter">G</span>lobal<span id="header-first-letter"> R</span>ecipe<span id="header-first-letter"> N</span>etwork</h1></a>
        </nav>
      </div>
    );
  }
}

export default Footer;

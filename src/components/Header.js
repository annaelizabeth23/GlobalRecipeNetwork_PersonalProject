import React, { Component } from 'react';
import LoginButton from './LoginButton';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light d-none d-lg-flex container-fluid">
          <Link to="/"><div className="navbar-brand"><h1 className="header-text"><span id="header-first-letter">G</span>lobal<span id="header-first-letter"> R</span>ecipe<span id="header-first-letter"> N</span>etwork</h1></div></Link>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
              <Link to="/"><div className="nav-item nav-link">Home <span className="sr-only">(current)</span></div></Link>
                <Link to="/aboutus"><div className="nav-item nav-link">About GRN</div></Link>
                <Link to="/browserecipes"><div className="nav-item nav-link">Browse Recipes</div></Link>
                <Link to="/addarecipe"><div className="nav-item nav-link">Add a Recipe</div></Link>
                <Link to="/myaccount"><div className="nav-item nav-link" href="#">My Account</div></Link>
              </div>
            </div>
            <LoginButton />
            <div className="nav-toggle">
              <div className="nav-toggle-bar"></div>
            </div>
        </nav>
        <nav className="navbar navbar-expand-lg navbar-light d-lg-none container-fluid">
          <a className="navbar-brand" href="#"><span className="header-text-responsive"><span id="header-first-letter-responsive">G</span>lobal<span id="header-first-letter-responsive"> R</span>ecipe<span id="header-first-letter-responsive"> N</span>etwork</span></a>
              <div className="navbar-nav">
                <ul className="responsive-nav d-flex justify-content-start">
                  <li className="responsive-nav-link p-2"><Link to="/"><div className="nav-item nav-link"><i className="fas fa-home"></i></div></Link></li>
                  <li className="responsive-nav-link p-2"><Link to="/browserecipes"><div className="nav-item nav-link"><i className="fas fa-search"></i></div></Link></li>
                  <li className="responsive-nav-link p-2"><Link to="/addarecipe"><div className="nav-item nav-link"><i className="far fa-plus-square"></i></div></Link></li>
                  <li className="responsive-nav-link p-2"><Link to="/myaccount"><div className="nav-item nav-link" href="#"><i className="far fa-user-circle"></i></div></Link></li>
                  <li className="responsive-nav-link ml-auto p-2"><LoginButton /></li>
                </ul>
              </div>
            <div className="nav-toggle">
              <div className="nav-toggle-bar"></div>
            </div>
        </nav>
        <section className="jumbotron d-none d-lg-block">
        </section>
      </div>
    );
  }
}

export default Header;

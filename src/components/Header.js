import React, { Component } from 'react';
import LoginButton from './LoginButton';
import european-pantry-img from '../img/european-pantry.jpeg';
import finger-food-chips-img from '../img/finger-food-chips.jpg';
import map-people-planning-img from '../img/map-people-planning.jpeg';


class Header extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid header-top-level">
          <nav className="navbar fixed-top">
            <h1 className="header-text"><span id="header-first-letter">G</span>lobal<span id="header-first-letter"> R</span>ecipe<span id="header-first-letter"> N</span>etwork</h1>
            <LoginButton id={"header-login-logout"}/>
          </nav>
        <section className="jumbotron">
          <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src={european-pantry-img} alt="First slide" />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={finger-food-chips-img} alt="Second slide" />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={map-people-planning-img} alt="Third slide" />
              </div>
            </div>
          </div>
        </section>
        </div>
      </div>
    );
  }
}

export default Header;

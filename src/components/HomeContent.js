import React, { Component } from 'react';
import axios from 'axios';
import chocolate_bread_img from '../img/chocolate-bread.jpeg';
import burrito_img from '../img/burrito.jpeg';
import steak_img from '../img/steak-sauce.jpeg';
import LoginButton from './LoginButton';
import {Link} from 'react-router-dom';

class HomeContent extends Component {

  render() {
    return (
          <div className="home-content-top-level top-level container">
            <div className="row">
              <div className="card text-center d-block col-12">
                <div className="card-body">
                  <h4 className="card-title">Recipes Unbounded</h4>
                  <p className="card-text">Find recipes from around the globe. Share recipes from your travels, heritage, or home region.</p>
                  <a href="#" className="btn btn-secondary btn-sm">Browse Recipes</a>
                </div>
              </div>
              <h4 className="d-block col-12">Featured Recipes for Spring:</h4>
              <div className="card sm-card col-lg-6">
                <img className="card-img-top img-thumbnail" src={burrito_img} alt="burrito" />
                <div className="card-body">
                  <h5 className="card-title">Authentic Mexican Chicken Burritos</h5>
                  <p className="card-text">This user learned to make this while on a memorable trip to Mexico.</p>
                  </div>
                  <span className="align-self-center"><Link to="/individualrecipe/19"><div className="btn btn-primary">Discover</div></Link></span>
              </div>
            <div className="card sm-card col-lg-6">
              <img className="card-img-top img-thumbnail" src={steak_img} alt="chocolate bread" />
              <div className="card-body">
                <h5 className="card-title">A Steak to Remember</h5>
                <p className="card-text">A fancy steak that even Gordon Ramsey would approve of.</p>
              </div>
              <span className="align-self-center"><Link to="/individualrecipe/19"><div className="btn btn-primary">Discover</div></Link></span>
            </div>
          </div>
        </div>
    );
  }
}

export default HomeContent;

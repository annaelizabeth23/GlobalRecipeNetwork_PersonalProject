import React, { Component } from 'react';
import axios from 'axios';
import chocolate_bread_img from '../img/chocolate-bread.jpeg';
import LoginButton from './LoginButton';
import {Link} from 'react-router-dom';

class HomeContent extends Component {

  render() {
    return (
          <div className="home-content-top-level top-level container">
            <div className="row">
            <div className="col-lg-12 card text-center d-none d-lg-block">
              <div className="card-body">
                <h5 className="card-title">Recipes Unbounded</h5>
                <p className="card-text">Find recipes from around the globe. Share recipes from your travels, heritage, or home region.</p>
                <a href="#" className="btn btn-primary">Browse Recipes</a>
              </div>
          </div>
          <div className="card text-center d-xs-block d-lg-none">
              <div className="card-body">
                <p className="card-text">Find recipes from around the globe. Share recipes from your travels, heritage, or home region.</p>
                <div className="d-xs-block d-lg-none"><LoginButton /></div>
              </div>
          </div>
          <div className="card sm-card col-lg-2">
            <img className="card-img-top" src={chocolate_bread_img} alt="chocolate bread" />
            <div className="card-body">
              <h5 className="card-title">PRAWN MALAI CURRY</h5>
              <p className="card-text">This delicious, mild curry is so easy to make. The word 'malai' means cream, but this curry gets its creaminess from coconut milk.</p>
              <Link to="/individualrecipe/1"><div className="btn btn-primary">Discover</div></Link>
            </div>
          </div>
          <div className="card sm-card col-lg-2">
            <img className="card-img-top" src={chocolate_bread_img} alt="chocolate bread" />
            <div className="card-body">
              <h5 className="card-title">Featured Recipe</h5>
              <p className="card-text">Super yummy chocolate bread, with a twist.</p>
              <a href="#" className="btn btn-primary">View Recipe</a>
            </div>
          </div>
          <div className="card sm-card col-lg-2">
            <img className="card-img-top" src={chocolate_bread_img} alt="chocolate bread" />
            <div className="card-body">
              <h5 className="card-title">Featured Recipe</h5>
              <p className="card-text">Super yummy chocolate bread, with a twist.</p>
              <a href="#" className="btn btn-primary">View Recipe</a>
            </div>
          </div>
          <div className="card sm-card col-lg-2">
            <img className="card-img-top" src={chocolate_bread_img} alt="chocolate bread" />
            <div className="card-body">
              <h5 className="card-title">Featured Recipe</h5>
              <p className="card-text">Super yummy chocolate bread, with a twist.</p>
              <a href="#" className="btn btn-primary">View Recipe</a>
            </div>
          </div>
          </div>
        </div>
    );
  }
}

export default HomeContent;

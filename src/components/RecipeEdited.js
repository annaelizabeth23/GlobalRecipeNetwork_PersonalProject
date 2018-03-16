import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class RecipeEdited extends Component {

  render() {
    return (
          <div>
           <h4>Your Recipe Has Been Edited</h4>
           <p>Thank you for contributing to the Global Recipe Network!</p>
           <Link to="/"><div className="btn btn-primary">Back to Home Page</div></Link>
           <Link to="/browserecipes"><div className="btn btn-primary">BrowseRecipes</div></Link>
           <Link to="/myaccount"><div className="btn btn-primary">My Account</div></Link>
        </div>
    );
  }
}

export default RecipeEdited;

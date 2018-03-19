import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class RecipeSubmitted extends Component {

  render() {
    return (
          <div className="container">
           <h4>Your recipe has been submitted to the Global Recipe Network!</h4>
           <p>Thank you for sharing your recipe with our online community.</p>
           <Link to="/"><div className="btn btn-primary">Back to Home Page</div></Link>
           <Link to="/browserecipes"><div className="btn btn-primary">BrowseRecipes</div></Link>
           <Link to="/addarecipe"><div className="btn btn-primary">Add Another Recipe</div></Link>
        </div>
    );
  }
}

export default RecipeSubmitted;

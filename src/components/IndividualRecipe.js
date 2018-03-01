import React, { Component } from 'react';
import axios from 'axios';

class IndividualRecipe extends Component {

  render() {
    return (
          <div className="individual-recipe-top-level top-level">
            <h4>Recipe Title</h4>
            <h6>Description</h6>
            <h6>The Story:</h6>
            <h6>Origin:</h6>
            <h6>Cook Time:</h6>
            <h6>Prep Time:</h6>                     
            <h6>Servings:</h6>
            <h6>Ingredients:</h6>
            <p>ingredients</p>
            <h6>Directions:</h6>
            <p>directions</p>
          </div>
    );
  }
}

export default IndividualRecipe;

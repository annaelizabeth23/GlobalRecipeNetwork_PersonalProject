import React, { Component } from 'react';
import axios from 'axios';

class IndividualRecipe extends Component {
  constructor() {
    super();
    this.state= {
        thisRecipe: {}
    }
}

  componentDidMount(){
    axios.post('/api/individualRecipe', {recipe_id: this.props.match.params.recipe_id}).then(response => {
      this.setState({thisRecipe: response.data[0]});
      //response.data comes back as an array but you can put it in an object and access as above
    });
  }

  render() {
    return (
          <div className="individual-recipe-top-level top-level container">
            <h4><b>{this.state.thisRecipe.title}</b></h4>
            <h6><b>{this.state.thisRecipe.recipe_desc}</b></h6>
            <h6>The Story:</h6><p>{this.state.thisRecipe.recipe_story}</p>
            <h6>Origin:</h6><p>{this.state.thisRecipe.recipe_origin}</p>
            <h6>Cook Time:</h6><p>{this.state.thisRecipe.cook_time}</p>
            <h6>Prep Time:</h6><p>{this.state.thisRecipe.prep_time}</p>                     
            <h6>Servings:</h6><p>{this.state.thisRecipe.servings}</p>
            <h6>Ingredients:</h6><p>{this.state.thisRecipe.ingredients}</p>
            <h6>Directions:</h6><p>{this.state.thisRecipe.directions}</p>
            <br />
            <button type="button" className="btn btn-secondary">Edit Your Recipe</button>
            <button type="button" className="btn btn-secondary">Delete Your Recipe</button>
          </div>
    );
  }
}

export default IndividualRecipe;

import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import { fetchUserData } from '../reducer';
import store from '../store';

class IndividualRecipe extends Component {
  constructor() {
    super();
    this.state= {
        thisRecipe: {},
        showEditAndDelete: false
    }
    this.checkIfUserCanEdit = this.checkIfUserCanEdit.bind(this);
  }

  componentDidMount () {
    axios.get('/api/user-data').then(response => {
        this.props.fetchUserData(response.data.user);
        this.getRecipeInfo();
    }).catch(error => {
        console.log('error with redux user at individual recipe comp')
    })
}
  
  getRecipeInfo(){
    console.log('get recipe info');
    axios.post('/api/individualRecipe', {recipe_id: this.props.match.params.recipe_id}).then(response => {
      this.setState({thisRecipe: response.data[0]},()=> this.checkIfUserCanEdit());
      //response.data comes back as an array but you can put it in an object and access as above
    });
    console.log('user', this.props);
  }

  checkIfUserCanEdit(){
    if (this.props.user && this.props.user.id === this.state.thisRecipe.auth0_id){
      console.log('check if user can edit')
      console.log(this.props.user.id);
      this.setState({
        showEditAndDelete: true
      });
    }else{
      console.log('show edit and delete is false right now')
    }
  }

  render() {
    console.log(this.state.showEditAndDelete);
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
            {this.state.showEditAndDelete &&
            <button type="button" className="btn btn-secondary">Edit Your Recipe</button>}
            {this.state.showEditAndDelete &&
            <button type="button" className="btn btn-secondary">Delete Your Recipe</button>}
          </div>
    );
  }
}

const mapStateToProps = store => {
  return {
      user: store.user
  };
};

const mapDispatchToProps = {
  fetchUserData: fetchUserData
  }

const connector = connect(mapStateToProps, mapDispatchToProps);
const connectedIndividualRecipe = connector(IndividualRecipe);

export default connectedIndividualRecipe;

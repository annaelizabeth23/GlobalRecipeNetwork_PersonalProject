import React from 'react';
import HomeContent from './components/HomeContent';
import AboutUs from './components/AboutGRN';
import AddARecipeContainer from './components/AddARecipeContainer';
import BrowseRecipes from './components/BrowseRecipes';
import IndividualRecipe from './components/IndividualRecipe';
import AccountContainer from './components/AccountContainer';
import RecipeSubmitted from './components/RecipeSubmitted';
import EditRecipe from './components/EditRecipe';
import RecipeEdited from './components/RecipeEdited';

import MyAccount from './components/MyAccount';
import {Switch, Route} from 'react-router-dom';



export default (
    <Switch>
        <Route component={HomeContent} exact path="/" />
        <Route component={AboutUs} path="/aboutus" />
        <Route component={BrowseRecipes} path="/browserecipes" />
        <Route component={AddARecipeContainer} path="/addarecipe" />
        <Route component={AccountContainer} path="/myaccount" />
        <Route component={IndividualRecipe} path="/individualrecipe/:recipe_id" />
        <Route component={RecipeSubmitted} path="/recipesubmitted" />
        <Route component={EditRecipe} path="/editrecipe/:recipe_id" />
        <Route component={RecipeEdited} path="/recipeedited" />
    </Switch>
)
import React from 'react';
import HomeContent from './components/HomeContent';
import AboutUs from './components/AboutGRN';
import AddARecipeContainer from './components/AddARecipeContainer';
import BrowseRecipes from './components/BrowseRecipes';
import IndividualRecipe from './components/IndividualRecipe';
import AccountContainer from './components/AccountContainer';

import MyAccount from './components/MyAccount';
import {Switch, Route} from 'react-router-dom';
import RecipeSubmitted from './components/RecipeSubmitted';


export default (
    <Switch>
        <Route component={HomeContent} exact path="/" />
        <Route component={AboutUs} path="/aboutus" />
        <Route component={BrowseRecipes} path="/browserecipes" />
        <Route component={AddARecipeContainer} path="/addarecipe" />
        <Route component={AccountContainer} path="/myaccount" />
        <Route component={IndividualRecipe} path="/individualrecipe/:recipe_id" />
        <Route component={RecipeSubmitted} path="/recipesubmitted" />
    </Switch>
)
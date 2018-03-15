const axios = require('axios');

module.exports = {
    getNewRecipes: (req, res) => {
        req.app.get('db').get_newest_recipes().then(recipes => {
        // console.log('recipes', recipes)
        res.status(200).json(recipes);
    }).catch(error => {
        console.log('Oh no! An error has happened!', error);
        res.status(500).json({message: 'An error occurred'})
    })},
    
    recipeSearch: (req, res) => {
        const title = req.body.title;
        console.log('this is the req.body', req.body);
        req.app.get('db').recipe_search([title, req.body.recipe_origin]).then(recipes => {
            res.status(200).json(recipes);
        }).catch(error => {
            console.log('Error at recipeSearch controller', error);
            res.status(500).json({message: 'An error occurred'})
        })
    },

    addRecipe: (req, res) => {
        const {id, title, recipeDesc, recipeStory, recipeOrigin, cookTime, prepTime, servings, ingredients, directions} = req.body;
        req.app.get('db').add_new_recipe([id, title, recipeDesc, recipeStory, recipeOrigin, cookTime, prepTime, servings, ingredients, directions]).then(response => {
        }).catch(error => {
            console.log('Error at addRecipe controller', error);
            res.status(500).json({message: 'An error occured'})
        })
    },

    myAccountRecipes: (req, res) => {
        const {auth0_sub} = req.body;
        console.log(req.body);
        req.app.get('db').my_account_recipes([auth0_sub]).then(recipes => {
            res.status(200).json(recipes);
        }).catch(error => {
            console.log('Error at myAccountRecipes controller', error);
            res.status(500).json({message: 'An error occurred'})
        })
    },

    individualRecipe: (req, res) => {
        const {recipe_id} = req.body;
        console.log('body:',req.body);
        req.app.get('db').individual_recipe([recipe_id]).then(recipe => {
            console.log('response:', recipe);
            res.status(200).json(recipe);
        }).catch(error => {
            console.log('Error at individualRecipe controller', error);
            res.status(500).json({message: 'An error occurred'})
        })
    },

   getUser: (req, res) => {
    res.json({ user: req.session.user });
  },

    logoutUser: (req, res) => {
        console.log("server log out");
        req.session.destroy();
        res.status(200).send();
    }
}
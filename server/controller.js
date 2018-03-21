const axios = require('axios');

module.exports = {
    guestLogin: (req, res) => {
        const user = {
            name: 'Guest Login',
            id: 'defaultguestuser',
            picture: 'https://images.pexels.com/photos/39604/information-information-board-message-business-card-39604.png?auto=compress&cs=tinysrgb&h=750&w=1260'
          }

        req.session.user = user;
        res.status(200).json(user);
    },

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
        req.app.get('db').recipe_search([title]).then(recipes => {
            res.status(200).json(recipes);
        }).catch(error => {
            console.log('Error at recipeSearch controller', error);
            res.status(500).json({message: 'An error occurred'})
        })
    },

    recipeOriginSearch: (req, res) => {
        const origin = req.body.origin;
        req.app.get('db').recipe_origin_search([req.body.origin]).then(recipes => {
            res.status(200).json(recipes);
        }).catch(error => {
            console.log('Error at recipeSearch controller', error);
            res.status(500).json({message: 'An error occurred'})
        })
    },

    addRecipe: (req, res) => {
        const {id, title, recipeDesc, recipeStory, recipeOrigin, cookTime, prepTime, servings, ingredients, directions} = req.body;
        req.app.get('db').add_new_recipe([id, title, recipeDesc, recipeStory, recipeOrigin, cookTime, prepTime, servings, ingredients, directions]).then(response => {
            res.status(200).send;
        }).catch(error => {
            console.log('Error at addRecipe controller', error);
            res.status(500).json({message: 'An error occured'})
        })
    },

    editRecipe: (req, res) => {
        console.log('edit recipe controller ******');
        const {id, title, recipe_desc, recipe_story, recipe_origin, cook_time, prep_time, servings, ingredients, directions, recipe_id} = req.body;
        req.app.get('db').edit_recipe([id, title, recipe_desc, recipe_story, recipe_origin, cook_time, prep_time, servings, ingredients, directions, recipe_id]).then(response => {
            res.status(200).send;
        }).catch(error => {
            console.log('Error at editRecipe controller', error);
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
            res.status(200).json(recipe);
        }).catch(error => {
            console.log('Error at individualRecipe controller', error);
            res.status(500).json({message: 'An error occurred'})
        })
    },

    deleteRecipe: (req, res) => {
        req.app.get('db').delete_recipe([req.params.recipe_id]).then(recipe => {
            res.status(200).send;
        }).catch(error => {
            console.log('Error at delete recipe controller', error);
            res.status(500).json({message: 'Error at delete recipe controller'})
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
const axios = require('axios');

module.exports = {
    getNewRecipes: (req, res) => {
        req.app.get('db').get_newest_recipes().then(recipes => {
        console.log('recipes', recipes)
        res.status(200).json(recipes);
    }).catch(error => {
        console.log('Oh no! An error has happened!', error);
        res.status(500).json({message: 'An error occurred'})
    })},
    
    searchRecipes: (req, res) => {
        
    },

   getUser: (req, res) => {
    res.json({ user: req.session.user });
  },

    logoutUser: (req, res) => (req, res) => {
        req.session.destroy();
        res.status(200).send();
    }
}
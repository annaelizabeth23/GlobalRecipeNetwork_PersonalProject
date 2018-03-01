const axios = require('axios');
const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
const session = require('express-session');
const controller = require('./controller');

require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 14
        //two weeks
    }
}));

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
}).catch(error => {
    console.log('massive error', error);
});

app.get('/api/getNewRecipes', controller.getNewRecipes);

app.get('/api/recipeSearch', controller.recipeSearch);

const port = 4000;
app.listen(port, () => console.log(`Anna's server listening on ${port}!`));
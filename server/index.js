const axios = require('axios');
const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
const session = require('express-session');
const controller = require('./controller');
const checkUserStatus = require('./middleware/checkUserStatus');

require('dotenv').config();

const app = express();

app.use( express.static( `${__dirname}/../build` ) );

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

//Auth0 code begins/////////////////////////////////////////////
app.get('/auth/callback', (req, res) => {
  console.log("get", `https://${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`);
  axios.post(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`, {
    client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
    client_secret: process.env.AUTH0_CLIENT_SECRET,
    code: req.query.code,
    grant_type: 'authorization_code',
    redirect_uri: `http://${req.headers.host}/auth/callback`
    //above we are sending all this code so we can get access token back
  }).then(accessTokenResponse => {
    return axios.get(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo/?access_token=${accessTokenResponse.data.access_token}`).then(userInfoResponse => {
      const userData = userInfoResponse.data;
      console.log("user data", userData);
      return req.app.get('db').find_user_by_auth0_id([userData.sub]).then(users => {
        //sub is the username, short for subject
        console.log("db checked");
        if (users.length) {
          //truthy to see if user found
            const user ={
              name: userData.name,
              id: userData.sub,
              picture: userData.picture
              //we are grabbing the info we want from the user data
            };
            req.session.user = user;
            //adding user to the session
            res.redirect('/');
            //redirecting to the home page BUT since added to session will display as logged in now
          }else{
            return req.app.get('db').create_user([userData.sub, userData.name, userData.picture]).then(newUsers => {
              console.log("db hit");
              const user = {
                name: userData.name,
                id: userData.sub,
                picture: userData.picture
              }
              req.session.user = user;
              //adding new user to the session
              res.redirect('/');
            })
          }
        }
      )
    })
  }).catch(error => {
    console.log("server error", error);
    res.send("an error happened");
    //now this second axios call is getting the user data back
  })
});
//Auth0 code ends////////////////////////////////////////////////////////////

app.post('/api/logout', controller.logoutUser);
//log out the user by destroying the session
  
  app.get('/api/user-data', controller.getUser);
  //similar to how we did it in the full stack review- using middleware to check that user is logged in, then getting the user data from the session

app.get('/api/guestLogin', controller.guestLogin);

app.get('/api/getNewRecipes', controller.getNewRecipes);

app.post('/api/recipeSearch', controller.recipeSearch);

app.post('/api/recipeOriginSearch', controller.recipeOriginSearch);

app.post('/api/addRecipe', controller.addRecipe);

app.post('/api/myAccountRecipes', controller.myAccountRecipes);

app.post('/api/individualRecipe', controller.individualRecipe);

app.post('/api/editRecipe', controller.editRecipe);

app.delete('/api/deleteRecipe/:recipe_id', controller.deleteRecipe);

const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

const port = 4000;
app.listen(port, () => console.log(`Anna's server listening on ${port}!`))
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
  

app.post('/api/logout', (req, res) => {
    req.session.destroy();
    res.send();
  })
  
  app.get('/api/user-data', (req, res) => {
    res.json({ user: req.session.user });
  });
  
  function checkLoggedIn(req, res, next) {
    if (req.session.user) {
      next();
    } else {
      res.status(403).json({ message: 'Unauthorized' });
    }
  }

app.get('/api/getNewRecipes', controller.getNewRecipes);

// app.get('/api/recipeSearch', controller.recipeSearch);

const port = 4000;
app.listen(port, () => console.log(`Anna's server listening on ${port}!`))
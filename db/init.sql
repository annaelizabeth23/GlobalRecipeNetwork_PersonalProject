DROP TABLE IF EXISTS users_auth0_mini;

CREATE TABLE IF NOT EXISTS users_auth0_mini (
  id SERIAL PRIMARY KEY,
  auth0_id VARCHAR NOT NULL,
  name TEXT NOT NULL,
  picture TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS recipes (
  recipe_id SERIAL PRIMARY KEY,
  id INTEGER REFERENCES users_auth0_mini (id),
  title TEXT,
  recipe_desc TEXT,
  recipe_story TEXT,
  recipe_origin TEXT,
  cook_time TEXT,
  prep_time TEXT,
  servings TEXT,
  ingredients TEXT,
  directions TEXT
);

INSERT INTO recipes
    (id, title, recipe_desc, recipe_story, recipe_origin, cook_time, prep_time, servings, ingredients, directions)
VALUES
    (1, 'Mexican Street Tacos', 'A delicious, spicy recipe from Northern Mexico.', 'I found this recipe while on a long journey in Mexico. A kind old lady taught me to make it.'
    , 'Mexico', '15 mins', '20 mins', '4', '1 lb meat, onions, tomatoes, cilantro, tortillas', 'Cook the meat until its cooked. Then assembele on the tortillas with the other ingredients, chopped. Serve hot.')
   ,(1, 'German Hot Potato Salad', 'Authentic recipe from Southern Germany. Sure to be a hit at potlucks!', 'I learned this recipe from an exhange student I housed for a semester. They would make this for our family often.'
   , 'Germany', '40 mins', '30 mins', '6', '5 potatoes, 1 pound bacon, 1 brown onion, apple cider vinegar, brown sugar, salt and pepper', 'Boil and slice potatoes. Cook bacon, reserving bacon drippings. Cook the brown onion in the bacon drippings. Mix the vingar and sugar. Mix all ingredients together, topping with salt and pepper as desired. Serve warm.')
;

INSERT INTO recipes
    (id, title, recipe_desc, recipe_story, recipe_origin, cook_time, prep_time, servings, ingredients, directions)
VALUES
    (1, 'Lasagna from Italy', 'A delicious recipe that is so good', 'I found this recipe while on a long journey in Italy. A kind old lady taught me to make it.'
    , 'Italy', '40 mins', '40 mins', '10', '1 lb meat, garlic, tomatoes, basil, lasagna noodles, cheese, pepper, salt', 'Cook the meat until its cooked. Then cook the lasagna noodles. Layer everything like it should be. Cook until hot and bubbling. Serve hot.')
   ,(1, 'Hot Dogs from America', 'Authentic recipe from America, like the ballparks. Sure to be a hit at potlucks!', 'I learned this recipe from an exhange student I housed for a semester. They would make this for our family often.'
   , 'United States', '15 mins', '10 mins', '8', '8 authentic American hot dogs, 8 white hot dog buns, ketchup, mustard, pickle relish', 'Grill the hot dogs on a low heat grill. Do not overcook. Warm the buns and slather with toppings. Serve fresh from the grill.')
;

--changed the recipes table to make the foreign key the auth 0 id on the user table for ease in using the sessions data from auth 0. had to make the auth 0 id column unique
 drop table recipes;

CREATE TABLE IF NOT EXISTS recipes (
  recipe_id SERIAL PRIMARY KEY,
  auth0_id TEXT REFERENCES users_auth0_mini (auth0_id),
  title TEXT,
  recipe_desc TEXT,
  recipe_story TEXT,
  recipe_origin TEXT,
  cook_time TEXT,
  prep_time TEXT,
  servings TEXT,
  ingredients TEXT,
  directions TEXT
);

select * from users_auth0_mini;

DROP TABLE IF EXISTS users_auth0_mini;

CREATE TABLE IF NOT EXISTS users_auth0_mini (
  id SERIAL PRIMARY KEY,
  auth0_id VARCHAR UNIQUE NOT NULL,
  name TEXT NOT NULL,
  picture TEXT NOT NULL
);

INSERT INTO recipes
    (auth0_id, title, recipe_desc, recipe_story, recipe_origin, cook_time, prep_time, servings, ingredients, directions)
VALUES
    ('facebook|10156174144007640', 'Mexican Street Tacos', 'A delicious, spicy recipe from Northern Mexico.', 'I found this recipe while on a long journey in Mexico. A kind old lady taught me to make it.'
    , 'Mexico', '15 mins', '20 mins', '4', '1 lb meat, onions, tomatoes, cilantro, tortillas', 'Cook the meat until its cooked. Then assembele on the tortillas with the other ingredients, chopped. Serve hot.')
   ,('facebook|10156174144007640', 'German Hot Potato Salad', 'Authentic recipe from Southern Germany. Sure to be a hit at potlucks!', 'I learned this recipe from an exhange student I housed for a semester. They would make this for our family often.'
   , 'Germany', '40 mins', '30 mins', '6', '5 potatoes, 1 pound bacon, 1 brown onion, apple cider vinegar, brown sugar, salt and pepper', 'Boil and slice potatoes. Cook bacon, reserving bacon drippings. Cook the brown onion in the bacon drippings. Mix the vingar and sugar. Mix all ingredients together, topping with salt and pepper as desired. Serve warm.')
;

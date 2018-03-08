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
-- NOTE: use javascript on front end to make everything lowercase

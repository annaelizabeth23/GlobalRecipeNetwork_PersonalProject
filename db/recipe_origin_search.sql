SELECT recipes.title, users_auth0_mini.name FROM recipes
FULL JOIN users_auth0_mini ON users_auth0_mini.auth0_id = recipes.auth0_id
WHERE recipes.recipe_origin LIKE $1;
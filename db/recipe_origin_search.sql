SELECT * FROM recipes
FULL OUTER JOIN users_auth0_mini ON users_auth0_mini.auth0_id = recipes.auth0_id
WHERE recipes.recipe_origin LIKE $1;
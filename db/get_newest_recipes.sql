-- SELECT * FROM recipes
-- ORDER BY recipe_id DESC
-- LIMIT 100;

SELECT * FROM recipes
JOIN users_auth0_mini ON users_auth0_mini.auth0_id = recipes.auth0_id
ORDER BY recipe_id DESC
LIMIT 100;
-- NOTE: this is still pseudocode!!!

-- select users.name, recipes.name from users, join recipes, on users_auth0_mini.id = recipes.id, where recipes.recipe_name like '%' + $1 + '%';

SELECT recipes.title FROM recipes
WHERE recipes.title LIKE '%$1:value%' OR recipes.recipe_origin LIKE $2;
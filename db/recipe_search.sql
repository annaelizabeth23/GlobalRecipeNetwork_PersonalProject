-- NOTE: this is still pseudocode!!!

-- select users.name, recipes.name from users, join recipes, on users_auth0_mini.id = recipes.id, where recipes.recipe_name like '%' + $1 + '%';

SELECT users.name, recipes.name FROM users_auth0_mini
    JOIN recipes 
        ON users_auth0_mini.id = recipes.id
    WHERE recipes.recipe_title LIKE '%' + $1 + '%' OR recipes.recipe_origin LIKE $2;
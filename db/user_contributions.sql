-- select the recipe name as name and the id (for the link to the recipe)
-- from recipes where user id is equal to this user's id;
SELECT name, recipe_id FROM recipes WHERE user.id = $1;
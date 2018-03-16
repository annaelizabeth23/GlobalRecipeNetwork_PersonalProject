UPDATE recipes
SET auth0_id = $1, title = $2, recipe_desc = $3, recipe_story = $4, recipe_origin = $5, cook_time = $6, prep_time = $7, servings = $8, ingredients = $9, directions = $10
WHERE recipe_id = $11;
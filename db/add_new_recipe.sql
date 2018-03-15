INSERT INTO recipes
    (auth0_id, title, recipe_desc, recipe_story, recipe_origin, cook_time, prep_time, servings, ingredients, directions)
VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
;
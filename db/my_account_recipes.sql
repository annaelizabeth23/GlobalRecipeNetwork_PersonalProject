SELECT recipes.title
    FROM recipes
    WHERE auth0_id = $1;
INSERT INTO users_auth0_mini (auth0_id, name, picture) values ($1, $2, $3)
RETURNING *;

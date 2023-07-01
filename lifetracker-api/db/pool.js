const { Pool } = require("pg")

const sqlScript = `
CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
    );
`;

//DB information to connect
const pool = new Pool({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "life_tracker",
});

//Execute the SQL script
pool
  .query(sqlScript)
  .then(() => {
    console.log("Table create query successfully");
  })
  .catch((error) => {
    console.error("Error creating table", error);
  });

//export the pool to be used in a different file
module.exports = pool;

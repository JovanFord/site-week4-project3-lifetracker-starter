const { Pool } = require("pg")
const {getDatabaseUri} = require("../config")
require("colors")

const db = new Pool ({connectionString: getDatabaseUri() })


db.connect((err) => {
  if(err){
    console.log("connection error".red, err.stack)
  } else {
    console.log("connection sucess to db".blue)
  }
})

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
  database: "lifetracker",
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

// export the pool to be used in a different file
module.exports = db;

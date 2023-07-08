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

const userSqlScript = `
CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
    );
`;

const nutritionSqlScript = `
CREATE TABLE IF NOT EXISTS nutrition (
  name VARCHAR(255) NOT NULL,
  category VARCHAR(255) NOT NULL,
  quantity INT NOT NULL,
  calories INT NOT NULL
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

//Execute the user SQL script
pool
  .query(userSqlScript)
  .then(() => {
    console.log("User table create query successfully");
  })
  .catch((error) => {
    console.error("Error creating table", error);
  });

//Execute the nutrition SQL script
pool
  .query(nutritionSqlScript)
  .then(() => {
    console.log("Nutrition table create query successfully");
  })
  .catch((error) => {
    console.error("Error creating table", error);
  });

// export the pool to be used in a different file
module.exports = db;

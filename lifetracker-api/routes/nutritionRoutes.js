//imports
const express = require("express");
const router = express.Router();
const pool = require("../db/pool");

// Get all foods from the database
router.get("/", async (req, res) => {
  // Set cache-control header to disable caching (optional-advanced)
  res.setHeader("Cache-Control", "no-cache");
  try {
    const query = "SELECT * FROM nutrition";
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Add a new food to the database
router.post("/", async (req, res) => {
  try {
    const {name, category, quantity, calories} = req.body;

    const query =
      "INSERT INTO cars (name, category, quantity, calories) VALUES ($1, $2, $3, $4) RETURNING *";
    const values = [name, category, quantity, calories];

    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
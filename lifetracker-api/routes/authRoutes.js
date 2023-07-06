const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user")


//Import the pool/db information
const pool = require("../db/pool");

//Registration route
router.post("/signup", async (req, res) => {
  const { username, password, first_name, last_name, email } = req.body;
  //password
  try {
    const user = await User.register(req.body);
    return res.status(201).json({ user: user });
  } catch (error) {
    console.error("Error registering user: ", error);
    res.status(500).json({ message: "Error registering user" });
  }
});

//Login route
router.post("/login", async function (req, res, next) {
  try {
    const user = await User.authenticate(req.body)
    return res.status(200).json({ user })
  } catch (err) {
    next(err)
  }
})

module.exports = router;
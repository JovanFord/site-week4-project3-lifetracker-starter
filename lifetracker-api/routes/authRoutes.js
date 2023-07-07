const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user")


//Import the pool/db information
const pool = require("../db/pool");

//Registration route
router.post("/signup", async (req, res) => {
  //password
  try {
    const user = await User.register(req.body);
    // Generate and sign JWT token
    const token = jwt.sign(
      { userId: result.rows[0].id, userName: result.rows[0].name },
      "secret-key",
      {
        expiresIn: "1h",
      }
    );

    res.status(201).json({
      message: "User registered successfully",
      token: token,
      user: result.rows[0],
    });
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
    const token = jwt.sign(
      { userId: user.id, userName: user.name },
      "secret-key",
      {
        expiresIn: "1h"
      }
    );

    res.status(200).json({
      message: "Login successful",
      token: token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
    return res.status(200).json({ user })
  } catch (err) {
    next(err)
  }
})



module.exports = router;
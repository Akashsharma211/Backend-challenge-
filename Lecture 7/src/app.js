const express = require('express');
const validationRules = require('./middlewares/validation.middleware');
const app = express();

app.use(express.json());

app.post(
  "/register",
  validationRules.registerValidationRules,  // <-- comma added
  (req, res) => {
    const { username, password, email } = req.body;

    if (!username || !password || !email) {
      return res.status(400).json({ error: "All fields are required" });
    }

    res.status(201).json({ message: "User registered successfully", user: { username, email } });
  }
);

module.exports = app;
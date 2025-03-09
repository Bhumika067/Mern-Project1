// const express = require('express');
// const bcrypt = require('bcryptjs');
// const User = require('../models/User');

// const router = express.Router();

// router.post('/signup', async (req, res) => {
//     const { username, email, password } = req.body;

//     // Check if all fields are provided
//     if (!username || !email || !password) {
//         return res.status(400).json({ error: "All fields are required" });
//     }

//     // Example: Restrict registration for certain emails
//     if (email.endsWith("@blocked.com")) {
//         return res.status(401).json({ error: "Registration from this domain is not allowed" });
//     }

//     try {
//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({ error: "User already exists" });
//         }

//         const hashedPassword = await bcrypt.hash(password, 10);
//         const newUser = new User({ username, email, password: hashedPassword });

//         await newUser.save();
//         res.status(201).json({ message: "User registered successfully", user: newUser });

//     } catch (error) {
//         res.status(500).json({ error: "Internal server error" });
//     }
// });


// // User Login (Without JWT, just returns confirmation)
// router.post('/login', async (req, res) => {
//     const { email, password } = req.body;

//     if (!email || !password) {
//         return res.status(400).json({ error: "All fields are required" });
//     }

//     try {
//         const user = await User.findOne({ email });
//         if (!user || !(await bcrypt.compare(password, user.password))) {
//             return res.status(400).json({ error: "Invalid credentials" });
//         }

//         res.json({ message: "Login successful", username: user.username });
//     } catch (err) {
//         res.status(500).json({ error: "Server error" });
//     }
// });

// module.exports = router;



import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

const router = express.Router();

// Signup
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ name, email, password: hashedPassword });

    res.status(201).json({ userId: newUser._id, message: "User registered" });
  } catch (error) {
    res.status(500).json({ message: "Error signing up" });
  }
});

//POST route for /api/users/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare the password using bcrypt
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Successful login - you can return user details or a token
    res.status(200).json({ message: 'Login successful', user });

  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});
export default router;

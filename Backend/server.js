// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const cors = require('cors');

// dotenv.config(); // Load environment variables

// const app = express();
// const PORT = process.env.PORT || 5000; // Use environment port if available

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Import Routes
// const userRoutes = require('./Routes/UserRoutes');  // Ensure filename matches
// const recipeRoutes = require('./Routes/recipeRoutes');

// // Use Routes
// app.use('/users', userRoutes);
// app.use('/recipes', recipeRoutes);

// // Connect to MongoDB Atlas
// mongoose.connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log("✅ MongoDB Connected Successfully"))
// .catch((err) => {
//     console.error("❌ DB Connection Error:", err.message);
//     process.exit(1); // Stop server if DB fails
// });

// // Home Route (Basic API Check)
// app.get('/', (req, res) => {
//     res.json({ message: "Welcome to the Recipe Sharing Platform Backend!" });
// });

// // Start Server
// app.listen(PORT, () => {
//     console.log(`🚀 Server is running on port: ${PORT}`);
// });



import express from "express";
import dotenv from "dotenv";  
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./Routes/UserRoutes.js";
import recipeRoutes from "./Routes/recipeRoutes.js";

// Load environment variables  
dotenv.config({ path: "./config.env" });  // Ensure this is BEFORE using process.env

// Connect to database
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/recipes", recipeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

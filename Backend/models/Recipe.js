// const mongoose = require("mongoose");

// const RecipeSchema = new mongoose.Schema({
//     title: { type: String, required: true },
//     ingredients: { type: [String], required: true },
//     instructions: { type: String, required: true },
//     author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }  // 👈 Ensure it references 'User'
// });

// module.exports = mongoose.model("Recipe", RecipeSchema);


import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: { type: [String], required: true },
  instructions: { type: String, required: true },
  image: { type: String, default: "" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

export default mongoose.model("Recipe", recipeSchema);

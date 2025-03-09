// const express = require("express");
// const Recipe = require("../models/Recipe");

// const router = express.Router();

// // ✅ Create a Recipe
// router.post("/add", async (req, res) => {
//     const { title, ingredients, instructions, author } = req.body;

//     if (!title || !ingredients || !instructions || !author) {
//         return res.status(400).json({ error: "All fields are required" });
//     }

//     try {
//         const newRecipe = new Recipe({ title, ingredients, instructions, author });
//         await newRecipe.save();
//         res.status(201).json({ message: "Recipe added successfully", recipe: newRecipe });
//     } catch (err) {
//         console.error("❌ Error adding recipe:", err);
//         res.status(500).json({ error: "Internal Server Error", details: err.message });
//     }
// });

// // ✅ Get All Recipes
// router.get("/", async (req, res) => {
//     try {
//         const recipes = await Recipe.find().populate("author", "username");
//         res.json(recipes);
//     } catch (err) {
//         console.error("❌ Error fetching recipes:", err);
//         res.status(500).json({ error: "Internal Server Error", details: err.message });
//     }
// });

// // ✅ Get Recipe by ID
// router.get("/:id", async (req, res) => {
//     try {
//         const recipe = await Recipe.findById(req.params.id).populate("author", "username");
//         if (!recipe) {
//             return res.status(404).json({ error: "Recipe not found" });
//         }
//         res.json(recipe);
//     } catch (err) {
//         console.error("❌ Error fetching recipe:", err);
//         res.status(500).json({ error: "Internal Server Error", details: err.message });
//     }
// });

// // ✅ Update Recipe (Partial Update)
// router.put("/update/:id", async (req, res) => {
//     try {
//         const updatedRecipe = await Recipe.findByIdAndUpdate(
//             req.params.id,
//             { $set: req.body }, // Partial update
//             { new: true, runValidators: true }
//         );

//         if (!updatedRecipe) {
//             return res.status(404).json({ error: "Recipe not found" });
//         }

//         res.json({ message: "Recipe updated successfully", updatedRecipe });
//     } catch (err) {
//         console.error("❌ Error updating recipe:", err);
//         res.status(500).json({ error: "Internal Server Error", details: err.message });
//     }
// });

// // ✅ Delete Recipe (Restrict to Author)
// router.delete("/delete/:id", async (req, res) => {
//     try {
//         const recipe = await Recipe.findById(req.params.id);
//         if (!recipe) {
//             return res.status(404).json({ error: "Recipe not found" });
//         }

//         // Optional: Restrict deletion to the author
//         // if (req.user.id !== recipe.author.toString()) {
//         //     return res.status(403).json({ error: "Not authorized to delete this recipe" });
//         // }

//         await recipe.deleteOne();
//         res.json({ message: "Recipe deleted successfully" });
//     } catch (err) {
//         console.error("❌ Error deleting recipe:", err);
//         res.status(500).json({ error: "Internal Server Error", details: err.message });
//     }
// });

// module.exports = router;




import express from "express";
import Recipe from "../models/Recipe.js";
import { authenticateUser } from "../middleware/authMiddleware.js";

const router = express.Router();

// Get all recipes
router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching recipes" });
  }
});

// Get a recipe by ID


router.get("/:id", async (req, res) => {
  const { id } = req.params;

  // Validate the ID to ensure it's a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid recipe ID" });
  }

  try {
    const recipe = await Recipe.findById(id);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.json(recipe);
  } catch (error) {
    console.error("Error fetching recipe:", error);
    res.status(500).json({ message: "Error fetching recipe" });
  }
});

// Add a new recipe
router.post("/", authenticateUser, async (req, res) => {
  try {
    const newRecipe = await Recipe.create({ ...req.body, user: req.user._id });
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(500).json({ message: "Error adding recipe" });
  }
});

// Update recipe
router.put("/:id", authenticateUser, async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedRecipe) return res.status(404).json({ message: "Recipe not found" });

    res.json(updatedRecipe);
  } catch (error) {
    res.status(500).json({ message: "Error updating recipe" });
  }
});

// Delete recipe
router.delete("/:id", authenticateUser, async (req, res) => {
  try {
    await Recipe.findByIdAndDelete(req.params.id);
    res.json({ message: "Recipe deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting recipe" });
  }
});

export default router;

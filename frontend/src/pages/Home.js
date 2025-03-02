import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ButterPaneer from '../images/Butter Paneer Masla.jpg';
import MangoSmoothie from '../images/Mango-smoothie.jpg';
import PavBhaji from '../images/Pav Bhaji.jpg';
import ChanaMasala from '../images/Chana-Masala.jpg';
import PuranPoli from '../images/Puran Poli.jpg';
import VegetableBiryani from '../images/Vegetable Biryani.jpg';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [reviewTexts, setReviewTexts] = useState({});

  // Check if user is logged in
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    if (storedRecipes.length === 0) {
      setRecipes([
        { id: 1, name: "Paneer Butter Masala", image: ButterPaneer, time: "40 min", likes: 0, reviews: [] },
        { id: 2, name: "Mango Smoothie", image: MangoSmoothie, time: "10 min", likes: 0, reviews: [] },
        { id: 3, name: "Pav Bhaji", image: PavBhaji, time: "35 min", likes: 0, reviews: [] },
        { id: 4, name: "Chana Masala", image: ChanaMasala, time: "30 min", likes: 0, reviews: [] },
        { id: 5, name: "Puran Poli", image: PuranPoli, time: "50 min", likes: 0, reviews: [] },
        { id: 6, name: "Vegetable Biryani", image: VegetableBiryani, time: "60 min", likes: 0, reviews: [] },
      ]);
    } else {
      setRecipes(storedRecipes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLike = (id) => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe.id === id ? { ...recipe, likes: recipe.likes + 1 } : recipe
      )
    );
  };

  const handleDelete = (id) => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe.id !== id));
  };

  const handleAddReview = (id) => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    const reviewText = reviewTexts[id] || "";
    if (reviewText.trim() === "") return;

    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe.id === id
          ? { ...recipe, reviews: [...recipe.reviews, reviewText] }
          : recipe
      )
    );

    setReviewTexts((prevReviewTexts) => ({
      ...prevReviewTexts,
      [id]: "",
    }));
  };

  const handleReviewChange = (id, text) => {
    setReviewTexts((prevReviewTexts) => ({
      ...prevReviewTexts,
      [id]: text,
    }));
  };

  return (
    <div style={styles.container}>
      <Header />
      <Navbar />
      <div style={styles.hero}>
        <h2>Explore Delicious Recipes 🍜</h2>
        <p>Find easy, quick, and tasty recipes curated just for you.</p>
      </div>
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search for a recipe..."
          style={styles.searchInput}
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div style={styles.recipeGrid}>
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <div key={recipe.id} style={styles.recipeCard}>
              <img
                src={recipe.image}
                alt={recipe.name}
                style={styles.recipeImg}
              />
              <h3>{recipe.name}</h3>
              <p>⏳ {recipe.time}</p>
              <p>👍 {recipe.likes} Likes</p>
              <div style={styles.actionBtns}>
                <button onClick={() => handleLike(recipe.id)} style={styles.likeBtn}>Like</button>
                <button onClick={() => handleDelete(recipe.id)} style={styles.deleteBtn}>Delete</button>
                <Link to={`/recipe/${recipe.id}`} style={styles.viewBtn}>View Recipe</Link>
              </div>
              <div>
                <h4>Reviews</h4>
                {recipe.reviews.length > 0 ? (
                  <ul>
                    {recipe.reviews.map((review, index) => (
                      <li key={index}>{review}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No reviews yet.</p>
                )}
                <input
                  type="text"
                  value={reviewTexts[recipe.id] || ""}
                  onChange={(e) => handleReviewChange(recipe.id, e.target.value)}
                  placeholder="Add a review"
                  style={styles.input}
                />
                <button onClick={() => handleAddReview(recipe.id)} style={styles.reviewBtn}>
                  Add Review
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No recipes found</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

const styles = {
  container: { fontFamily: "Arial", padding: 0, textAlign: "center", background: "#ff6f00", color: "white" },
  hero: { margin: "40px 0" },
  searchContainer: { textAlign: "center", margin: "20px 0" },
  searchInput: { width: "50%", padding: "12px", borderRadius: "6px", border: "1px solid #ddd" },
  recipeGrid: { display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px", padding: "20px" },
  recipeCard: { background: "white", color: "black", width: "250px", borderRadius: "12px", padding: "15px" },
  recipeImg: { width: "100%", height: "150px", objectFit: "cover" },
  actionBtns: { display: "flex", justifyContent: "center", gap: "8px", marginTop: "10px" },
  likeBtn: { background: "green", color: "white", padding: "8px", borderRadius: "6px" },
  deleteBtn: { background: "red", color: "white", padding: "8px", borderRadius: "6px" },
  viewBtn: { background: "orange", color: "white", padding: "8px", borderRadius: "6px", textDecoration: "none" },
  input: { width: "90%", padding: "8px", borderRadius: "4px", border: "1px solid #ddd" },
  reviewBtn: { background: "#007BFF", color: "white", padding: "8px", borderRadius: "6px" },
};


// // // import { useState } from "react";
// // // import { Link } from "react-router-dom";

// // // export default function AddRecipe() {
// // //   const [name, setName] = useState("");
// // //   const [image, setImage] = useState("");
// // //   const [time, setTime] = useState("");
// // //   const [ingredients, setIngredients] = useState("");
// // //   const [instructions, setInstructions] = useState("");

// // //   const handleAddRecipe = (e) => {
// // //     e.preventDefault();
// // //     console.log("Recipe Added:", name, image, time, ingredients, instructions);
// // //   };

// // //   const handleImageChange = (e) => {
// // //     const file = e.target.files[0];
// // //     if (file) {
// // //       const reader = new FileReader();
// // //       reader.onloadend = () => {
// // //         setImage(reader.result); // Set the image as base64 string
// // //       };
// // //       reader.readAsDataURL(file); // Convert the file to base64
// // //     }
// // //   };

// // //   return (
// // //     <div style={styles.container}>
// // //       <div style={styles.formContainer}>
// // //         <h2 style={styles.title}>Add a New Recipe</h2>
// // //         <form onSubmit={handleAddRecipe}>
// // //           <input
// // //             type="text"
// // //             placeholder="Recipe Name"
// // //             value={name}
// // //             onChange={(e) => setName(e.target.value)}
// // //             style={styles.input}
// // //           />
// // //           <input
// // //             type="file"
// // //             accept="image/*"
// // //             onChange={handleImageChange}
// // //             style={styles.input}
// // //           />
// // //           {image && (
// // //             <div style={styles.imagePreview}>
// // //               <img src={image} alt="Recipe" style={styles.image} />
// // //             </div>
// // //           )}
// // //           <input
// // //             type="text"
// // //             placeholder="Cooking Time"
// // //             value={time}
// // //             onChange={(e) => setTime(e.target.value)}
// // //             style={styles.input}
// // //           />
// // //           <textarea
// // //             placeholder="Ingredients"
// // //             value={ingredients}
// // //             onChange={(e) => setIngredients(e.target.value)}
// // //             style={styles.textarea}
// // //           />
// // //           <textarea
// // //             placeholder="Instructions"
// // //             value={instructions}
// // //             onChange={(e) => setInstructions(e.target.value)}
// // //             style={styles.textarea}
// // //           />
// // //           <button type="submit" style={styles.button}>Add Recipe</button>
// // //         </form>
// // //         <p style={styles.backText}>
// // //           <Link to="/" style={styles.link}>Back to Home</Link>
// // //         </p>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // const styles = {
// // //   container: {
// // //     background: "linear-gradient(to bottom, #FF512F, #DD2476)",
// // //     height: "100vh",
// // //     display: "flex",
// // //     alignItems: "center",
// // //     justifyContent: "center",
// // //     fontFamily: "Arial, sans-serif",
// // //     padding: "0 20px",
// // //   },
// // //   formContainer: {
// // //     background: "#fff",
// // //     padding: "40px 60px",
// // //     borderRadius: "12px",
// // //     boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
// // //     textAlign: "center",
// // //     width: "100%",
// // //     maxWidth: "600px",
// // //     minHeight: "500px",
// // //     transition: "transform 0.3s ease",
// // //   },
// // //   title: { 
// // //     fontSize: "28px", 
// // //     fontWeight: "bold", 
// // //     marginBottom: "30px",
// // //     color: "#333"
// // //   },
// // //   input: {
// // //     width: "100%",
// // //     padding: "15px",
// // //     margin: "15px 0",
// // //     borderRadius: "8px",
// // //     border: "1px solid #ddd",
// // //     fontSize: "18px",
// // //     boxSizing: "border-box",
// // //   },
// // //   textarea: {
// // //     width: "100%",
// // //     padding: "15px",
// // //     margin: "15px 0",
// // //     borderRadius: "8px",
// // //     border: "1px solid #ddd",
// // //     fontSize: "18px",
// // //     boxSizing: "border-box",
// // //     height: "150px",
// // //     resize: "none",
// // //   },
// // //   button: {
// // //     width: "100%",
// // //     padding: "15px",
// // //     background: "#ff6f00",
// // //     color: "white",
// // //     border: "none",
// // //     borderRadius: "8px",
// // //     cursor: "pointer",
// // //     fontSize: "18px",
// // //     transition: "background-color 0.3s ease",
// // //   },
// // //   backText: { 
// // //     marginTop: "20px", 
// // //     fontSize: "16px", 
// // //     color: "#666" 
// // //   },
// // //   link: { 
// // //     color: "#ff6f00", 
// // //     textDecoration: "none", 
// // //     fontWeight: "bold",
// // //     transition: "color 0.3s ease",
// // //   },
// // //   imagePreview: {
// // //     marginTop: "15px",
// // //     marginBottom: "15px",
// // //   },
// // //   image: {
// // //     width: "100%",
// // //     maxHeight: "300px",
// // //     objectFit: "contain",
// // //     borderRadius: "8px",
// // //   },
// // // };


          


// // // import React, { useState } from "react";
// // // import { useNavigate, Navigate } from "react-router-dom";
// // // import useAuth from "../hooks/useAuth"; // Import custom hook

// // // const AddRecipe = () => {
// // //   const auth = useAuth(); // Use the custom hook
// // //   const navigate = useNavigate();

// // //   const [recipe, setRecipe] = useState({
// // //     name: "",
// // //     ingredients: "",
// // //     instructions: "",
// // //     image: "",
// // //   });

// // //   if (!auth.isAuthenticated) {
// // //     return <Navigate to="/login" />;
// // //   }

// // //   const handleChange = (e) => {
// // //     setRecipe({ ...recipe, [e.target.name]: e.target.value });
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     console.log("Recipe added:", recipe);
// // //     navigate("/");
// // //   };

// // //   return (
// // //     <div style={styles.container}>
// // //       <h2>Add a New Recipe</h2>
// // //       <form onSubmit={handleSubmit} style={styles.form}>
// // //         <input type="text" name="name" placeholder="Recipe Name" onChange={handleChange} required />
// // //         <textarea name="ingredients" placeholder="Ingredients" onChange={handleChange} required />
// // //         <textarea name="instructions" placeholder="Instructions" onChange={handleChange} required />
// // //         <input type="text" name="image" placeholder="Image URL" onChange={handleChange} required />
// // //         <button type="submit" style={styles.button}>Add Recipe</button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // const styles = {
// // //   container: {
// // //     maxWidth: "500px",
// // //     margin: "auto",
// // //     padding: "20px",
// // //     textAlign: "center",
// // //     backgroundColor: "#fff",
// // //     borderRadius: "10px",
// // //     boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
// // //   },
// // //   form: {
// // //     display: "flex",
// // //     flexDirection: "column",
// // //     gap: "10px",
// // //   },
// // //   button: {
// // //     padding: "10px",
// // //     backgroundColor: "#28a745",
// // //     color: "white",
// // //     border: "none",
// // //     borderRadius: "5px",
// // //     cursor: "pointer",
// // //   },
// // // };

// // // export default AddRecipe;


// import React, { useState } from "react";
// import { useNavigate, Navigate } from "react-router-dom";
// import useAuth from "../hooks/useAuth"; // Import authentication hook


// const AddRecipe = () => {
//   const auth = useAuth(); // Check authentication
//   const navigate = useNavigate();

//   // Recipe state
//   const [recipe, setRecipe] = useState({
//     name: "",
//     ingredients: "",
//     instructions: "",
//     image: "",
//   });

//   // Success message state
//   const [successMessage, setSuccessMessage] = useState("");

//   // Redirect if user is not authenticated
//   if (!auth.isAuthenticated) {
//     return <Navigate to="/login" />;
//   }

//   // Handle input changes
//   const handleChange = (e) => {
//     setRecipe({ ...recipe, [e.target.name]: e.target.value });
//   };

//   // Handle image URL input and preview
//   const handleImageChange = (e) => {
//     setRecipe({ ...recipe, image: e.target.value });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!recipe.name || !recipe.ingredients || !recipe.instructions) {
//       alert("Please fill out all fields.");
//       return;
//     }

//     console.log("Recipe added:", recipe);

//     // Save recipe data (For now, store in localStorage for testing)
//     const savedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
//     localStorage.setItem("recipes", JSON.stringify([...savedRecipes, recipe]));

//     setSuccessMessage("Recipe added successfully! Redirecting...");
//     setTimeout(() => navigate("/"), 2000); // Redirect to home after 2s
//   };

//   return (
//     <div style={styles.container}>
//       <h2>Add a New Recipe</h2>

//       {successMessage && <p style={styles.success}>{successMessage}</p>}

//       <form onSubmit={handleSubmit} style={styles.form}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Recipe Name"
//           value={recipe.name}
//           onChange={handleChange}
//           required
//         />
//         <textarea
//           name="ingredients"
//           placeholder="Ingredients (comma-separated)"
//           value={recipe.ingredients}
//           onChange={handleChange}
//           required
//         />
//         <textarea
//           name="instructions"
//           placeholder="Instructions"
//           value={recipe.instructions}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="image"
//           placeholder="Image URL"
//           value={recipe.image}
//           onChange={handleImageChange}
//         />

//         {/* Show Image Preview */}
//         {recipe.image && (
//           <div style={styles.imagePreview}>
//             <img src={recipe.image} alt="Recipe Preview" style={styles.image} />
//           </div>
//         )}

//         <button type="submit" style={styles.button}>Add Recipe</button>
//       </form>
//     </div>
//   );
// };

// // Styles for better UI
// const styles = {
//   container: {
//     maxWidth: "500px",
//     margin: "auto",
//     padding: "20px",
//     textAlign: "center",
//     backgroundColor: "#fff",
//     borderRadius: "10px",
//     boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "10px",
//   },
//   button: {
//     padding: "10px",
//     backgroundColor: "#28a745",
//     color: "white",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
//   success: {
//     color: "green",
//     fontWeight: "bold",
//   },
//   imagePreview: {
//     marginTop: "10px",
//   },
//   image: {
//     width: "100%",
//     maxHeight: "200px",
//     objectFit: "cover",
//     borderRadius: "5px",
//   },
// };

// export default AddRecipe;

// import React, { useState } from "react";
// import { useNavigate, Navigate } from "react-router-dom";
// import useAuth from "../hooks/useAuth";

// const AddRecipe = () => {
//   const auth = useAuth();
//   const navigate = useNavigate();

//   const [recipe, setRecipe] = useState({
//     name: "",
//     ingredients: "",
//     instructions: "",
//     image: "",
//   });

//   const [successMessage, setSuccessMessage] = useState("");

//   if (!auth.isAuthenticated) {
//     return <Navigate to="/Login" />;
//   }

//   const handleChange = (e) => {
//     setRecipe({ ...recipe, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!recipe.name || !recipe.ingredients || !recipe.instructions) {
//       alert("Please fill out all fields.");
//       return;
//     }

//     const savedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
//     localStorage.setItem("recipes", JSON.stringify([...savedRecipes, recipe]));

//     setSuccessMessage("Recipe added successfully! Redirecting...");
//     setTimeout(() => navigate("/"), 3000);
//   };

//   return (
//     <div>
//       <h2>Add a New Recipe</h2>

//       {successMessage && <p>{successMessage}</p>}

//       <form onSubmit={handleSubmit}>
//         <input type="text" name="name" placeholder="Recipe Name" value={recipe.name} onChange={handleChange} required />
//         <textarea name="ingredients" placeholder="Ingredients (comma-separated)" value={recipe.ingredients} onChange={handleChange} required />
//         <textarea name="instructions" placeholder="Instructions" value={recipe.instructions} onChange={handleChange} required />
//         <input type="text" name="image" placeholder="Image URL" value={recipe.image} onChange={handleChange} />

//         {recipe.image && <img src={recipe.image} alt="Recipe Preview" width="200" />}

//         <button type="submit">Add Recipe</button>
//       </form>
//     </div>
//   );
// };

// export default AddRecipe;





import React, { useState } from "react";
import { useNavigate, Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AddRecipe = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: "",
    instructions: "",
    image: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  // Redirect if not authenticated (while preserving the intended page)
  if (!auth.isAuthenticated) {
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  }

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value.trim() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!recipe.name || !recipe.ingredients || !recipe.instructions) {
      alert("Please fill out all fields.");
      return;
    }

    const savedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    const updatedRecipes = [...savedRecipes, recipe];

    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));

    setSuccessMessage("Recipe added successfully! Redirecting...");
    setTimeout(() => navigate("/"), 3000); // Redirect to home after 2s
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Add a New Recipe</h2>

        {successMessage && <p style={styles.successMessage}>{successMessage}</p>}

        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>Recipe Name</label>
          <input 
            type="text" 
            name="name" 
            placeholder="Enter recipe name" 
            value={recipe.name} 
            onChange={handleChange} 
            required 
            style={styles.input} 
          />

          <label style={styles.label}>Ingredients</label>
          <textarea 
            name="ingredients" 
            placeholder="Enter ingredients (comma-separated)" 
            value={recipe.ingredients} 
            onChange={handleChange} 
            required 
            style={styles.textarea} 
          />

          <label style={styles.label}>Instructions</label>
          <textarea 
            name="instructions" 
            placeholder="Enter instructions" 
            value={recipe.instructions} 
            onChange={handleChange} 
            required 
            style={styles.textarea} 
          />

          <label style={styles.label}>Image URL (Optional)</label>
          <input 
            type="text" 
            name="image" 
            placeholder="Enter image URL" 
            value={recipe.image} 
            onChange={handleChange} 
            style={styles.input} 
          />

          {recipe.image && (
            <img src={recipe.image} alt="Recipe Preview" style={styles.imagePreview} />
          )}

          <button type="submit" style={styles.button}>Add Recipe</button>
        </form>
      </div>
    </div>
  );
};

// ✅ **Updated Styles**
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(to bottom, #FF512F, #DD2476)",
    fontFamily: "Arial, sans-serif",
  },
  formContainer: {
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "100%",
    maxWidth: "500px",
  },
  title: {
    fontSize: "26px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  },
  label: {
    fontSize: "16px",
    fontWeight: "bold",
    textAlign: "left",
    display: "block",
    margin: "10px 0 5px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    fontSize: "16px",
    boxSizing: "border-box",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    height: "80px",
    marginBottom: "10px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    fontSize: "16px",
    boxSizing: "border-box",
  },
  imagePreview: {
    width: "100%",
    maxHeight: "200px",
    objectFit: "cover",
    borderRadius: "8px",
    marginTop: "10px",
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#ff6f00",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "18px",
    marginTop: "10px",
    transition: "background-color 0.3s ease",
  },
  successMessage: {
    color: "green",
    fontSize: "16px",
    marginBottom: "10px",
  },
};

export default AddRecipe;

// import { useParams } from "react-router-dom";

// function RecipeDetails() {
//   const { id } = useParams();

//   return (
//     <div className="recipe-details">
//       <h1>🍽 Recipe {id}</h1>
//       <p>More details about the recipe will go here.</p>
//     </div>
//   );
// }

// export default RecipeDetails;



import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/recipes/${id}`);
        if (!response.ok) throw new Error("Recipe not found");
        const data = await response.json();
        setRecipe(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchRecipe();
  }, [id]);

  if (error) return <p className="error">❌ {error}</p>;
  if (!recipe) return <p className="loading">⏳ Loading recipe...</p>;

  return (
    <div className="recipe-details">
      <h1>🍽 {recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} className="recipe-image" />
      <h2>Ingredients:</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Instructions:</h2>
      <p>{recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetails;

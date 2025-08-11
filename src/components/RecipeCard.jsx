import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  if (!recipe || !recipe.id) {
    // Optionally render nothing or a placeholder
    return null;
  }

  return (
    <Link to={`/all-recipe/${recipe.id}`}>
      <div className="bg-white rounded shadow p-4 transform transition duration-300 hover:scale-105 hover:shadow-md cursor-pointer">
        <div className="overflow-hidden rounded mb-3">
          <img
            src={recipe.image || "/placeholder.jpg"}
            alt={recipe.name || "Recipe"}
            className="w-full h-40 object-cover transform transition-transform duration-300 hover:scale-110"
          />
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{recipe.name}</h3>
        <p className="text-sm text-gray-500">Easy • 30 mins</p>
      </div>
    </Link>
  );
};

export default RecipeCard;

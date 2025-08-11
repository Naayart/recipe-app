import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JollofRice from "../assets/images/jollof.jpg";
import PepperoniPizza from "../assets/images/pizza.jpg";
import CaesarSalad from "../assets/images/salad.jpg";
import EgusiSoup from "../assets/images/Egusi.jpeg";
import FriedRice from "../assets/images/fried-rice.jpg";
import ChickenAlfredo from "../assets/images/chicken-alfredo.jpg";

const recipeData = [
  {
    id: "1",
    name: "Jollof Rice",
    image: JollofRice,
    category: "Rice",
    ingredients: ["Rice", "Tomatoes", "Onions", "Pepper", "Oil"],
    instructions:
      "1. Blend tomatoes, onions, and pepper.\n2. Cook sauce with oil and seasonings.\n3. Add rice and cook till soft.",
  },
  {
    id: "2",
    name: "Pepperoni Pizza",
    image: PepperoniPizza,
    category: "Fast Food",
    ingredients: ["Dough", "Tomato sauce", "Cheese", "Pepperoni"],
    instructions:
      "1. Spread sauce on dough.\n2. Add cheese and pepperoni.\n3. Bake until crust is golden brown.",
  },
  {
    id: "3",
    name: "Caesar Salad",
    image: CaesarSalad,
    category: "Salad",
    ingredients: ["Lettuce", "Croutons", "Caesar dressing", "Parmesan cheese"],
    instructions:
      "1. Toss lettuce with dressing.\n2. Add croutons and cheese.\n3. Serve chilled.",
  },
  {
    id: "4",
    name: "Fried Rice",
    image: FriedRice,
    category: "Rice",
    ingredients: ["Rice", "Vegetables", "Egg", "Soy Sauce"],
    instructions:
      "1. Fry vegetables and egg.\n2. Add rice and stir-fry with soy sauce.",
  },
  {
    id: "5",
    name: "Egusi Soup",
    image: EgusiSoup,
    category: "Soup",
    ingredients: ["Egusi", "Palm Oil", "Spinach", "Seasonings"],
    instructions:
      "1. Fry egusi in palm oil.\n2. Add water, spinach, and seasonings.\n3. Cook until thick.",
  },
  {
    id: "6",
    name: "Chicken Alfredo",
    image: ChickenAlfredo,
    category: "Pasta",
    ingredients: ["Chicken", "Cream", "Pasta", "Parmesan"],
    instructions:
      "1. Cook pasta.\n2. Sauté chicken.\n3. Combine with cream and cheese.",
  },
];

export default function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipeData.find((r) => r.id === id);

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.includes(id));
  }, [id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    let updatedFavorites;
    if (favorites.includes(id)) {
      updatedFavorites = favorites.filter((favId) => favId !== id);
    } else {
      updatedFavorites = [...favorites, id];
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  if (!recipe) {
    return <p className="text-center py-20">Recipe not found 😞</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">{recipe.name}</h1>
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-64 object-cover rounded mb-6 shadow"
      />

      <button
        onClick={toggleFavorite}
        className={`mb-6 px-4 py-2 rounded font-medium shadow ${
          isFavorite ? "bg-red-500 text-white" : "bg-gray-200 text-gray-800"
        }`}
      >
        {isFavorite ? "❤️ Remove from Favorites" : "🤍 Add to Favorites"}
      </button>

      <p className="text-sm text-gray-500 mb-2">Category: {recipe.category}</p>

      <h2 className="text-2xl font-semibold mb-2 text-gray-700">Ingredients</h2>
      <ul className="list-disc list-inside mb-6 text-gray-600">
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-2 text-gray-700">Instructions</h2>
      <pre className="whitespace-pre-wrap text-gray-600 bg-gray-50 p-4 rounded shadow">
        {recipe.instructions}
      </pre>
    </div>
  );
};



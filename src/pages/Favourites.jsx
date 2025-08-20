import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import useSWR from "swr";
import RecipeCard from "../components/RecipeCard";
import { apiFetcher } from "../api/client";

export default function Favourite() {

    const [favourites, setFavourites] = useState([]);

    // Simulating fetching favorite recipes from local storage or an API
    const { data, error } = useSWR("/recipes", apiFetcher);

    useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    // Match IDs with actual recipe objects
    if (data && data.recipes){
      const favRecipes = data.recipes.filter((recipe) => saved.includes(recipe.id));
    setFavourites(favRecipes);
    }
    ;
  }, [data]);

    return(
        <>
      <Navbar />
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">❤️ Your Favourite Recipes</h1>

          {favourites.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {favourites.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          ) : (
            <p className="text-gray-600 text-lg">You haven’t added any favourites yet.</p>
          )}
        </div>
      </section>
    </>
    );
}
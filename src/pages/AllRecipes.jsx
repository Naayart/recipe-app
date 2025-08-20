import { useState } from "react";
import Navbar from "../components/Navbar";
import RecipeCard from "../components/RecipeCard";
import JollofRice from "../assets/images/jollof.jpg";
import PepperoniPizza from "../assets/images/pizza.jpg";
import CaesarSalad from "../assets/images/salad.jpg";
import EgusiSoup from "../assets/images/Egusi.jpeg";
import FriedRice from "../assets/images/fried-rice.jpg";
import ChickenAlfredo from "../assets/images/chicken-alfredo.jpg";
import useSWR from "swr";
import { apiFetcher } from "../api/client";

export default function AllRecipes() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, error } = useSWR(
    `/search?q=${searchTerm}`,
    apiFetcher
  );

  if (error) return <div>Error loading recipes.</div>;

  if (!data) return <div>Loading...</div>;

  return (
    <>
      <Navbar />
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">All Recipes</h1>

          {/* Search Bar */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search recipes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Recipe Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {data.recipes.length > 0 ? (
              data.recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))
            ) : (
              <p className="text-gray-500 col-span-full">No recipes found.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

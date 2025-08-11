import { useState } from "react";
import Navbar from "../components/Navbar";
import RecipeCard from "../components/RecipeCard";
import JollofRice from "../assets/images/jollof.jpg";
import PepperoniPizza from "../assets/images/pizza.jpg";
import CaesarSalad from "../assets/images/salad.jpg";
import EgusiSoup from "../assets/images/egusi.jpeg"; 
import FriedRice from "../assets/images/fried-rice.jpg"; 
import ChickenAlfredo from "../assets/images/chicken-alfredo.jpg"; 

export default function AllRecipes() {
  const [searchTerm, setSearchTerm] = useState("");

  const recipes = [
    { id: 1, name: "Jollof Rice", image: JollofRice },
    { id: 2, name: "Pepperoni Pizza", image: PepperoniPizza },
    { id: 3, name: "Caesar Salad", image: CaesarSalad },
    { id: 4, name: "Fried Rice", image: FriedRice },
    { id: 5, name: "Egusi Soup", image: EgusiSoup },
    { id: 6, name: "Chicken Alfredo", image: ChickenAlfredo },
  ];

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            {filteredRecipes.length > 0 ? (
              filteredRecipes.map((recipe) => (
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

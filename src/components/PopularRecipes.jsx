import React from "react";
import RecipeCard from "./RecipeCard";
import JollofRice from "../assets/images/jollof.jpg";
import PepperoniPizza from "../assets/images/pizza.jpg";
import CaesarSalad from "../assets/images/salad.jpg";

const popularRecipes = [
  { id: 1, name: "Jollof Rice", image: JollofRice },
  { id: 2, name: "Pepperoni Pizza", image: PepperoniPizza },
  { id: 3, name: "Caesar Salad", image: CaesarSalad },
];

export default function PopularRecipes(){

  
  return (
    <section className="py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Popular Recipes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {popularRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </section>
  );
}



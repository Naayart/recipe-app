import React from "react";
import { Link } from "react-router-dom";

export default function HeroHome(){
  return (
    <section className="bg-yellow-400 py-16 px-4 md:px-8 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Discover and Save Delicious Recipes
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Home-cooked meals, curated for food lovers everywhere.
        </p>
        <Link
          to="/all-recipes"
          className="inline-block bg-black text-white font-semibold py-3 px-6 rounded shadow hover:bg-yellow-600 transition"
        >
          🔍 Browse Recipes
        </Link>
      </div>
    </section>
  );
};



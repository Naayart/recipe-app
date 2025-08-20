import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  // 1. This tracks whether the mobile menu is open or not
  const [menuOpen, setMenuOpen] = useState(false);

  // 2. Navigation links for reuse
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "All Recipes", path: "/all-recipes" },
    { name: "Favourites", path: "/favourites" },
  ];

  return (
    <nav className="bg-white  sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-extrabold text-yellow-500 tracking-wide"
        >
          RecipeHome
        </NavLink>

        {/* Desktop Links (hidden on mobile) */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-600 font-semibold"
                  : "text-gray-700 hover:text-yellow-500"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button (hamburger icon) */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {/* Show hamburger or close icon */}
          {menuOpen ? (
            <span className="text-2xl">&times;</span> // X icon
          ) : (
            <span className="text-2xl">&#9776;</span> // Hamburger ☰
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col space-y-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)} // close menu on click
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-600 font-semibold"
                  : "text-gray-700 hover:text-yellow-500"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

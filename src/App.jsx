import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecipeDetail from "./pages/RecipeDetail";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AllRecipes from "./pages/AllRecipes";
import Favourites from "./pages/Favourites";

function App() {
  //Define the routes for the application
  const recipeHomeRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/all-recipes",
      element: <AllRecipes />,
    },
    {
      path: "/all-recipe/:id",
      element: <RecipeDetail />,
    },

    { path: "favourites", element: <Favourites /> },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <>
      <RouterProvider router={recipeHomeRouter} />
    </>
  );
}

export default App;

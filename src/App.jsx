import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecipeDetail from "./pages/RecipeDetail";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AllRecipes from "./pages/AllRecipes";

function App() {
  const [count, setCount] = useState(0);
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
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <>
      <RouterProvider router={recipeHomeRouter} />
    </>
  );
}

export default App;

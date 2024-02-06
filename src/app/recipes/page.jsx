"use client";

import RecipeCard from "@/components/RecipeCard";
import React, { useEffect, useState } from "react";

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    const response = await fetch("http://localhost:3001/recipes");
    const recipes = await response.json();

    setRecipes(recipes);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  console.log(recipes);
  return (
    <div>
      <div>
        <h1>test</h1>
        {recipes && recipes.map((recipe) => <RecipeCard name={recipe.name} />)}
      </div>
    </div>
  );
}

export default Recipes;

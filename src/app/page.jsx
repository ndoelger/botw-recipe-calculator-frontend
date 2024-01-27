"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [ingredients, setIngredients] = useState([]);

  const fetchIngredients = async () => {
    const response = await fetch("http://localhost:3001/ingredients");
    // console.log(response);
    const ingredients = await response.json();

    setIngredients(ingredients);
  };

  useEffect(() => {
    fetchIngredients();
  }, []);
  

  return (
    <div>
      {ingredients && ingredients.map(ingredient => (
        <div>
        <h1>{ingredient.name}</h1>
        <Image alt={ingredient.name} src={`http://botw-recipes.com/assets/images/stuff/ingredients/${ingredient.index}.png`} width={100} height={100}></Image>
        </div>
      ))}
    </div>
  );
}

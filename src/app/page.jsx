"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import MaterialCard from "@/components/MaterialCard";

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
    <div className="flex flex-wrap justify-center">
      {ingredients &&
        ingredients.map((ingredient) => (
          <MaterialCard
            key={ingredient.index}
            name={ingredient.name}
            effect={ingredient.effect}
            index={ingredient.index}
          />
        ))}
    </div>
  );
}

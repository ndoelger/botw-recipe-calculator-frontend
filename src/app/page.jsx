"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import MaterialCard from "@/components/MaterialCard";
import InventoryTest from "@/components/InventoryTest";

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

  const [inventory, setInventory] = useState([]);

  const changeCount = (name, increment) => {
    const itemIndex = inventory.findIndex((item) => item.name === name);
    // console.log(itemIndex);
    const item = inventory[itemIndex];

    if (itemIndex === -1 && increment === 1) {
      // console.log("second works");
      const newItem = { name, quantity: 1 };
      // console.log(newItem);
      const newInventory = [...inventory, newItem];
      setInventory(newInventory);
      // console.log(inventory);
    } else {
      setInventory(
        inventory
          .map((item, index) => {
            if (index === itemIndex) {
              {
                if (increment === 1)
                  return { ...item, quantity: item.quantity + 1 };
                else if (increment === -1) {
                  if (item.quantity === 1) return null;
                  else return { ...item, quantity: item.quantity - 1 };
                }
              }
            }
            return item;
          })
          .filter((item) => item !== null)
      );
    }
  };

  return (
    <>
      <InventoryTest inventory={inventory} />
      <div className="flex flex-wrap justify-center">
        {ingredients &&
          ingredients.map((ingredient) => (
            <MaterialCard
              key={ingredient.index}
              name={ingredient.name}
              effect={ingredient.effect}
              index={ingredient.index}
              changeCount={changeCount}
            />
          ))}
      </div>
    </>
  );
}

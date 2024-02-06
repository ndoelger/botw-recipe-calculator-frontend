import React from "react";
import { useState } from "react";

export default function InventoryTest({ inventory }) {
  return (
    <div>
      <h1>Inventory:</h1>
      {inventory.map((item) => (
        <>
          {item.name}, {item.quantity}
        </>
      ))}
    </div>
  );
}

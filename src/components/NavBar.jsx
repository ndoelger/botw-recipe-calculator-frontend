import React from "react";
import Link from "next/link";

function Recipes() {
  return (
    <div>
      <Link href="/">Materials</Link>
      <Link href="/recipes">Recipes</Link>
    </div>
  );
}

export default Recipes;

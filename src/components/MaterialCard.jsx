import Image from "next/image";
import { useState } from "react";
import InventoryTest from "./InventoryTest";

function MaterialCard({ name, index, effect, changeCount }) {

  return (
    <>
    <div className="flex flex-col items-center justify-end w-20 m-1">
      {/* <h1 className="text-center">{name}</h1> */}
      <div className="flex w-22 border-width: 2px border-style: solid bg-slate-400 justify-center align-middle relative">
        <Image
          alt={name}
          src={`http://botw-recipes.com/assets/images/stuff/ingredients/${index}.png`}
          width={80}
          height={80}></Image>
        {effect && <Image
          alt={effect}
          src={`/effects/${effect}.png`}
          width={26}
          height={26}
          className="absolute bottom-0 left-0">
            </Image>}
      </div>
      <div >
      <button onClick={() => changeCount(name, -1)}>-</button>
      <button onClick={() => changeCount(name, 1)}>+</button>
      </div>
    </div>
    </>
  );
}

export default MaterialCard;

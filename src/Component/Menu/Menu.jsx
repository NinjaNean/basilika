import React, { useEffect } from "react";
import MenuItem from "./MenuItem.jsx";
import useCartStore from "../../data/cartStore.js";

function Menu() {
  const { foodDataList, totalPrice } = useCartStore();
  const categories = ["Sushi", "Dumplings", "Snacks", "Drycker"];

  //För felsökning
  useEffect(() => {
    console.log(totalPrice);
  }, [totalPrice]);

  return (
    <div className="menu">
      {categories.map((category) => (
        <div key={category}>
          <h1 id={category}>{category}</h1>
          {foodDataList
            .filter((item) => item.category === category)
            .map((foodItem) => (
              <MenuItem key={foodItem.id} foodItem={foodItem} />
            ))}
        </div>
      ))}
    </div>
  );
}

export default Menu;

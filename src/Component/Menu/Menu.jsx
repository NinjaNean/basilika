import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem.jsx";
import useCartStore from "../../data/cartStore.js";
import { menuData } from "../../data/menuData.js";

function Menu() {
  const { foodDataList, totalPrice, toggleItemActive } = useCartStore();
  const categories = ["Sushi", "Dumplings", "Snacks", "Drycker"];

  
  const [menuItems, setMenuItems] = useState(menuData);


  //För felsökning
  useEffect(() => {
    console.log(totalPrice);
  }, [totalPrice]);

  return (
    <div className="menu">
       <div className="add-edit-buttons">
        <button className="edit-item-button">Redigera</button>
        <button className="add-item-button">Lägg till</button>
      </div>

      {categories.map((category) => (
        <div key={category}>
          <h2 id={category}>{category}</h2>
          {foodDataList
            .filter((item) => item.category === category)
            .map((foodItem) => (
              <MenuItem key={foodItem.id} foodItem={foodItem} 
              active={foodItem.active}/>
            ))}
        </div>
      ))}
    </div>
  );
}

export default Menu;

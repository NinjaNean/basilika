import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem.jsx";
import useCartStore from "../../data/cartStore.js";


function Menu() {
  const { foodDataList, totalPrice, toggleItemActive } = useCartStore();
  const categories = ["Sushi", "Dumplings", "Snacks", "Drycker"];
  const [editClick, setEditClick] = useState(false);

  const handleEditClick = () => {
    setEditClick((prev) => !prev);
  };
  
  
  
  


  //För felsökning
  useEffect(() => {
    console.log(totalPrice);
  }, [totalPrice]);

  return (
    <div  className={`menu ${editClick ? "show-buttons" : ""}`}>
       <div className="add-edit-buttons">
        <button className="edit-item-button" onClick={handleEditClick}>
        {editClick ? 'Klart' : 'Redigera' }</button>
        <button className="add-item-button">Lägg till</button>
      </div>

      {categories.map((category) => (
        <div key={category}>
          <h1 id={category}>{category}</h1>
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

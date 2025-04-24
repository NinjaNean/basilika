/*import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem.jsx";
import useCartStore from "../../data/cartStore.js";
import { menuData } from "../../data/menuData.js";

function Menu() {
  const { foodDataList, totalPrice, toggleItemActive } = useCartStore();
  const categories = ["Sushi", "Dumplings", "Snacks", "Drycker"];
  const [editClick, setEditClick] = useState(false);

  const handleEditClick = () => {
    setEditClick((prev) => !prev);
  };
  
  const [menuItems, setMenuItems] = useState(menuData);


  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
  const loginStatus = localStorage.getItem("isLoggedIn");
  setIsLoggedIn(loginStatus === "true");
}, []);


  //För felsökning
  useEffect(() => {
    console.log(totalPrice);
  }, [totalPrice]);

  return (
    <div  className={`menu ${editClick ? "show-buttons" : ""}`}>
       <div className="add-edit-buttons">
       
       <button 
       className={`edit-item-button ${editClick ? "disabled" : ""}`} 
       onClick={handleEditClick}> {editClick ? "Redigera" : "Redigera"}
      </button>

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
*/

import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem.jsx";
import useCartStore from "../../data/cartStore.js";
import { menuData } from "../../data/menuData.js";

function Menu() {
  const { foodDataList, totalPrice, toggleItemActive } = useCartStore();
  const categories = ["Sushi", "Dumplings", "Snacks", "Drycker"];
  const [editClick, setEditClick] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(null); // Start as null to avoid flickering
  const [menuItems, setMenuItems] = useState(menuData);

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loginStatus === "true");
  }, []);

  const handleEditClick = () => {
    setEditClick((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.reload();
  };

  if (isLoggedIn === null) return null; // Avoid showing until checked

  return (
    <div className={`menu ${editClick ? "show-buttons" : ""}`}>
      {isLoggedIn && (
        <div className="add-edit-buttons">
          <button className="edit-item-button" onClick={handleEditClick}>
            {editClick ? "Klart" : "Redigera"}
          </button>
          <button className="add-item-button">Lägg till</button>
          <button className="logout-button" onClick={handleLogout}>Logga ut</button>
        </div>
      )}

      {categories.map((category) => (
        <div key={category}>
          <h1 id={category}>{category}</h1>
          {foodDataList
            .filter((item) => item.category === category)
            .map((foodItem) => (
              <MenuItem
                key={foodItem.id}
                foodItem={foodItem}
                active={foodItem.active}
              />
            ))}
        </div>
      ))}
    </div>
  );
}

export default Menu;

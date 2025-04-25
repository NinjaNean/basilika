import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem.jsx";
import useCartStore from "../../data/cartStore.js";
import { getMenuFromAPI } from "../../data/jsonStorage.js";
import AddItem from "../add-item/AddItem.jsx";

function Menu() {
  const { foodDataList, totalPrice, toggleItemActive, setFoodData } = useCartStore();
  const categories = ["Sushi", "Dumplings", "Snacks", "Drycker"];
  const [editClick, setEditClick] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const addFoodItem = useCartStore((state) => state.addFoodItem);
  const [addFood, setAddFoot] = useState(false);

  const handleAddItem = (item) => {
    addFoodItem(item);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMenuFromAPI(); // Hämta data från API
        setFoodData(data); // Sätt datan i Zustand
      } catch (error) {
        console.error("Misslyckades att hämta menydata:", error);
      }
    };

    fetchData();
  }, [setFoodData]);

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
          <button className={`edit-item-button ${editClick ? "edit-mode" : ""}`} onClick={handleEditClick}>
            {editClick ? "Klart" : "Redigera"}
          </button>
          <button onClick={() => setAddFoot(true)} className="add-item-button">
            Lägg till
          </button>
          <button className="logout-button" onClick={handleLogout}>
            Logga ut
          </button>
        </div>
      )}

      {addFood && <AddItem onAddItem={handleAddItem} />}

      {categories.map((category) => (
        <div key={category}>
          <h1 id={category}>{category}</h1>
          {foodDataList
            .filter((item) => item.category === category)
            .map((foodItem) => (
              <MenuItem key={foodItem.id} foodItem={foodItem} active={foodItem.active} />
            ))}
        </div>
      ))}
    </div>
  );
}

export default Menu;

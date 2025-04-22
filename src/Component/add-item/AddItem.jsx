import React, { useState, useEffect } from "react";

import "./AddItem.css";

import menuData from "../../Data/menuData";

const AddItem = () => {
  const [menuItems, setMenuItems] = useState([]);

  const [newItem, setNewItem] = useState({
    name: "",
    description: "",
    price: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    setMenuItems(menuData);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setNewItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddItem = () => {
    if (newItem.name && newItem.description && newItem.price) {
      const item = { ...newItem, id: Date.now() };

      setMenuItems((prev) => [...prev, item]);

      setNewItem({ name: "", description: "", price: "" });

      setError("");
    } else {
      setError("Fyll i alla fält.");
    }
  };

  const handleDeleteItem = (id) => {
    setMenuItems((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <div className="admin-menu-container">
      <h2>Menyhantering</h2>

      <div className="admin-menu-form">
        <input
          type="text"
          name="name"
          placeholder="Maträttsnamn"
          value={newItem.name}
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="description"
          placeholder="Beskrivning"
          value={newItem.description}
          onChange={handleInputChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Pris (SEK)"
          value={newItem.price}
          onChange={handleInputChange}
        />

        <input
          type="photo"
          name="photo"
          placeholder="photo"
          value={newItem.photo}
          onChange={handleInputChange}
        />

        <div className="admin-menu-form-buttons">
          <button
            className="cancel-button"
            onClick={() => setNewItem({ name: "", description: "", price: "" })}
          >
            Avbryt
          </button>

          <button className="add-button" onClick={handleAddItem}>
            Lägg till
          </button>
        </div>
      </div>

      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default AddItem;

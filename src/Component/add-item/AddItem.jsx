import React, { useState } from "react";
import "./AddItem.css";

const AddItem = ({ onAddItem }) => {
  const [newItem, setNewItem] = useState({
    name: "",
    description: "",
    price: "",
    photo: "",
  });

  const [error, setError] = useState("");

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    //validering for name and description
    if (name === "name" || name === "description") {
     
      const newValue = value.replace(/[^A-Za-zÅÄÖåäö ]/g, "");
      setNewItem((prev) => ({ ...prev, [name]: newValue }));
    } else {
     
      setNewItem((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleAddItem = () => {
    if (newItem.name && newItem.description && newItem.price && newItem.photo) {
      if (Number(newItem.price) > 0) {
        const item = { ...newItem, id: Date.now() };
        onAddItem(item); 
        setNewItem({ name: "", description: "", price: "", photo: "" }); 
        setError(""); 
      } else {
        setError("Priset måste vara ett positivt tal."); 
      }
    } else {
      setError("Fyll i alla fält."); 
	    }
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
          type="text"
          name="photo"
          placeholder="URL"
          value={newItem.photo}
          onChange={handleInputChange}
        />

        <div className="admin-menu-form-buttons">
          <button
            className="cancel-button"
            onClick={() => setNewItem({ name: "", description: "", price: "", photo: "" })}
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

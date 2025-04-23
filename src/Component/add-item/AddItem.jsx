import React, { useState } from "react";
import Joi from "joi";
import "./AddItem.css";

const schema = Joi.object({
  name: Joi.string().pattern(/^[A-Za-zÅÄÖåäö ]+$/).required().messages({
    "string.empty": "Fältet namn är obligatoriskt.",
    "string.pattern.base": "Namnet får endast innehålla bokstäver och mellanslag.",
  }),
  description: Joi.string().pattern(/^[A-Za-zÅÄÖåäö ]+$/).required().messages({
    "string.empty": "Fältet beskrivning är obligatoriskt.",
    "string.pattern.base": "Beskrivningen får endast innehålla bokstäver och mellanslag.",
  }),
  price: Joi.number().positive().required().messages({
    "number.base": "Priset måste vara ett nummer.",
    "number.positive": "Priset måste vara ett positivt tal.",
    "any.required": "Fältet pris är obligatoriskt.",
  }),
  photo: Joi.string().uri().required().messages({
    "string.uri": "Vänligen ange en giltig URL.",
    "string.empty": "Fältet URL är obligatoriskt.",
    "any.required": "Fältet URL är obligatoriskt.",
  }),
});

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
	  
		if (name === "name" || name === "description") {
		  const newValue = value.replace(/[^A-Za-zÅÄÖåäö ]/g, "");
		  setNewItem((prev) => ({ ...prev, [name]: newValue }));
		} else if (name === "price") {
		  const numericValue = value.replace(/[^0-9]/g, ""); // just positiv number
		  setNewItem((prev) => ({ ...prev, [name]: numericValue }));
		} else {
		  setNewItem((prev) => ({ ...prev, [name]: value }));
		}
	  };
	  

  const handleAddItem = () => {
    const itemToValidate = {
      ...newItem,
      price: newItem.price === "" ? "" : Number(newItem.price),
    };

    const { error: validationError } = schema.validate(itemToValidate);

    if (validationError) {
      setError(validationError.details[0].message);
      return;
    }

    const item = { ...itemToValidate, id: Date.now() };
    onAddItem(item);
    setNewItem({ name: "", description: "", price: "", photo: "" });
    setError("");
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

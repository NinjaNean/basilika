import React, { useState } from "react";
import Joi from "joi";
import "./AddItem.css";

const schema = Joi.object({
  name: Joi.string()
    .pattern(/^[A-Za-zÅÄÖåäö ,]+$/)
    .required()
    .messages({
      "string.empty": "Fältet namn är obligatoriskt.",
      "string.pattern.base": "Namnet får endast innehålla bokstäver, mellanslag و kommatecken.",
    }),
  description: Joi.string()
    .pattern(/^[A-Za-zÅÄÖåäö ,]+$/)
    .max(110)
    .required()
    .messages({
      "string.empty": "Fältet beskrivning är obligatoriskt.",
      "string.pattern.base": "Beskrivningen får endast innehålla bokstäver, mellanslag و kommatecken.",
    }),
  price: Joi.number().positive().required().messages({
    "number.base": "Priset måste vara ett nummer.",
    "number.positive": "Priset måste vara ett positivt tal.",
    "any.required": "Fältet pris är obligatoriskt.",
  }),
  img: Joi.string().uri().required().messages({
    "string.uri": "Vänligen ange en giltig URL.",
    "string.empty": "Fältet URL är obligatoriskt.",
    "any.required": "Fältet URL är obligatoriskt.",
  }),
  category: Joi.string().required().messages({
    "string.empty": "Välj en kategori.",
  }),
});

const AddItem = ({ onAddItem }) => {
  const [newItem, setNewItem] = useState({
    name: "",
    description: "",
    price: "",
    img: "",
    category: "Sushi",
  });
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "name" || name === "description") {
      const newValue = value.replace(/[^A-Za-zÅÄÖåäö ,]/g, "");
      setNewItem((prev) => ({ ...prev, [name]: newValue }));
    } else if (name === "price") {
      const numericValue = value.replace(/[^0-9]/g, "");
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
      console.log(validationError.details);
      setError(validationError.details[0].message);
      return;
    }

    const item = {
      ...itemToValidate,
      id: Date.now(),
      active: false,
    };

    onAddItem(item);
    setNewItem({
      name: "",
      description: "",
      price: "",
      img: "",
      category: "Sushi",
    });
    setError("");
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setNewItem({
      name: "",
      description: "",
      price: "",
      img: "",
      category: "Sushi",
    });
    setError("");
  };

  return (
    <div className="admin-menu-container">
      {isSubmitted ? (
        <div className="success-message">
          <h2>Maträtten har lagts till!</h2>
          <button className="add-button" onClick={handleReset}>
            Lägg till en ny maträtt
          </button>
        </div>
      ) : (
        <>
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
            <input type="text" name="img" placeholder="URL" value={newItem.img} onChange={handleInputChange} />
            <select name="category" value={newItem.category} onChange={handleInputChange}>
              <option value="Sushi">Sushi</option>
              <option value="Dumplings">Dumplings</option>
              <option value="Snacks">Snacks</option>
              <option value="Drycker">Drycker</option>
            </select>

            <div className="admin-menu-form-buttons">
              <button
                className="cancel-button"
                onClick={() =>
                  setNewItem({
                    name: "",
                    description: "",
                    price: "",
                    img: "",
                    category: "Sushi",
                  })
                }
              >
                Avbryt
              </button>
              <button className="add-button" onClick={handleAddItem}>
                Lägg till
              </button>
            </div>
          </div>
          {error && <p className="error-message">{error}</p>}
        </>
      )}
    </div>
  );
};

export default AddItem;

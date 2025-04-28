import React, { useState, useEffect } from "react";
import minusImg from "../../assets/minus-svg.svg";
import plusImg from "../../assets/plus-svg.svg";
import checkbox from "../../assets/checkbox.png";
import trash from "../../assets/trash.png";
import useCartStore from "../../data/cartStore";
import { useEditMenuStore } from "../../data/menuStore.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { validateInput } from "../../data/validationSchemas.js";

function MenuItem({ foodItem, active }) {
  const [touchedInput, setTouchedInput] = useState({ name: false, description: false, price: false, img: false });

  const { addToCart, removeFromCart, cart } = useCartStore();
  const { toggleItemActive } = useCartStore();

  const [form, setForm] = useState({
    storeName: foodItem.name,
    storeDescription: foodItem.description,
    storePrice: foodItem.price,
    storeImg: foodItem.img,
  });

  const [validation, setValidation] = useState({
    css: {},
    message: {},
    isFormValid: false,
  });
  useEffect(() => {
    const result = validateInput(form, touchedInput);
    setValidation(result);
  }, [form, touchedInput]);

  const { updateFoodItem } = useCartStore();

  useEffect(() => {
    setForm({
      storeName: foodItem.name,
      storeDescription: foodItem.description,
      storePrice: foodItem.price,
      storeImg: foodItem.img,
    });
  }, [foodItem]);

  useEffect(() => {}, [form]);

  const handleSaveButton = () => {
    updateFoodItem(foodItem.id, {
      name: form.storeName,
      description: form.storeDescription,
      price: form.storePrice,
      img: form.storeImg,
    });

    toggleItemActive(foodItem.id);
  };

  const { removeFoodItem } = useCartStore();
  const handleDeleteMenuItem = () => {
    removeFoodItem(foodItem.id);
  };
  const handleUrlChange = (e) => {
    const url = e.target.value;
    setForm((prev) => ({ ...prev, storeImg: url }));
    setTouchedInput((prev) => ({ ...prev, img: true }));
  };

  const num = cart.find((item) => {
    if (item === undefined) {
      return;
    } else {
      return item.id === foodItem.id;
    }
  });

  return (
    <div className="menu-item">
      <div>
        {active ? (
          <>
            <input
              type="text"
              value={form.storeName}
              onChange={(e) => setForm({ ...form, storeName: e.target.value })}
              className="name-input"
              onBlur={() => setTouchedInput({ ...touchedInput, name: true })}
            />
            <p className="name-message">{validation.message.name}</p>
          </>
        ) : (
          <h2>{foodItem.name}</h2>
        )}

        {active ? (
          <>
            <input
              type="text"
              value={form.storeDescription}
              onChange={(e) => setForm({ ...form, storeDescription: e.target.value })}
              className="description-input"
              onBlur={() => setTouchedInput({ ...touchedInput, description: true })}
            />
            <p className="description-message">{validation.message.description}</p>
          </>
        ) : (
          <p>{foodItem.description}</p>
        )}
      </div>

      <div className={!active ? "menu-flex" : "menu-flex edit-flex"}>
        <div>
          {active ? (
            <>
              <input
                type="number"
                value={form.storePrice}
                onChange={(e) => setForm({ ...form, storePrice: e.target.value })}
                className="price-input"
                onBlur={() => setTouchedInput({ ...touchedInput, price: true })}
              />
              <p className="price-message">{validation.message.price}</p>
            </>
          ) : (
            <p>{foodItem.price} :-</p>
          )}

          {!active && (
            <div className="cart-buttons">
              <button onClick={() => removeFromCart(foodItem)}>
                <img src={minusImg} alt="minus icon" />
              </button>
              <p>{num?.quantity ?? 0}</p>
              <button onClick={() => addToCart(foodItem)}>
                <img src={plusImg} alt="plus icon" />
              </button>
            </div>
          )}
        </div>

        {active ? (
          <>
            <input
              type="url"
              placeholder="https://example.com"
              pattern="https?://.*"
              className="url-input"
              onChange={handleUrlChange}
              onBlur={() => setTouchedInput({ ...touchedInput, img: true })}
            />
            <p className="img-message">{validation.message.img}</p>
          </>
        ) : (
          <img src={foodItem.img} alt="info icon" />
        )}

        <div className="button-container">
          {!active ? (
            <button className="pencil" onClick={() => toggleItemActive(foodItem.id)}>
              <FontAwesomeIcon icon={faPencil} />
              <span className="hover-text">redigera</span>
            </button>
          ) : (
            <button className="save-button" disabled={!validation.isFormValid} onClick={handleSaveButton}>
              <img src={checkbox} alt="checkbox icon" />
              <span className="hover-text">spara</span>
            </button>
          )}

          <button className="delete-button" onClick={handleDeleteMenuItem}>
            <img src={trash} alt="trash icon" />
            <span className="hover-text">ta bort</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;

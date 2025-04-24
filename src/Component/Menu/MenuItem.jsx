import React, { useState, useEffect } from "react";
import infoImg from "../../assets/information-svg.svg";
import minusImg from "../../assets/minus-svg.svg";
import plusImg from "../../assets/plus-svg.svg";
import checkbox from '../../assets/checkbox.png';
import trash from '../../assets/trash.png';
import useCartStore from "../../data/cartStore";
import { useEditMenuStore } from "../../data/menuStore.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';



function MenuItem({ foodItem, active }) {



  const { addToCart, removeFromCart, cart } = useCartStore();
  const {toggleItemActive} = useCartStore()

  const [form, setForm] = useState({
    storeName: foodItem.name,
    storeDescription: foodItem.description,
    storePrice: foodItem.price,
    storeImg: foodItem.img,
  }) 

 

  const { updateFoodItem } = useCartStore();

  useEffect(() => {
    setForm({
      storeName: foodItem.name,
      storeDescription: foodItem.description,
      storePrice: foodItem.price,
      storeImg: foodItem.img,
    });
  }, [foodItem]);

 
  

const handleSaveButton = () => {
  
  updateFoodItem(foodItem.id, {
    name: form.storeName,
    description: form.storeDescription,
    price: form.storePrice,
    img: form.storeImg
  });

  toggleItemActive(foodItem.id);
};

const { removeFoodItem } = useCartStore();
const handleDeleteMenuItem = () => {
  removeFoodItem(foodItem.id);
};
const handleUrlChange = (event) => {
  const url = event.target.value;
  console.log("Entered URL:", url);
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
          />
          <p>{message.name}</p>
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
          />
          <p>{message.description}</p>
          </>
        ) : (
          <p>{foodItem.description}</p>
        )}


      </div>

      <div className="menu-flex">
        <div>
        {active ? (
          <>
            <input
              type="number"
              value={form.storePrice}
              onChange={(e) => setForm({ ...form, storePrice: e.target.value })}
              className="price-input"
            />
            <p>{message.price}</p>
            </>
          ) : (
            <p>{foodItem.price} :-</p>
          )}

          {!active &&  (
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
         
            <input
            type="url"
            placeholder="https://example.com"
            required
            pattern="https://.*"
            onChange={handleUrlChange}
            className="url-input"
          />
          ) : (
            <img src={foodItem.img} alt="info icon" />
          
          )}
          
          <div className="button-container">
          {!active ? (
            
            <button className='pencil' onClick={() => toggleItemActive(foodItem.id)}>
              <FontAwesomeIcon icon={faPencil} />
              <span className="hover-text">redigera</span>
            </button>
          ) : (
            
            <button className='save-button' onClick={handleSaveButton}>
              <img src={checkbox} alt="checkbox icon" />
              <span className="hover-text">spara</span>
            </button>
          )}

          <button className='delete-button' onClick={handleDeleteMenuItem}>
            <img src={trash} alt="trash icon" />
            <span className="hover-text">ta bort</span>
          </button>
        </div>

      </div>
    </div>
  );
}

export default MenuItem;

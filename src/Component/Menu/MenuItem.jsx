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
        <h2>{foodItem.name} 
        <input
          type="text"
          value={active ? form.storeName : foodItem.name}
          disabled={!active}
          id='nameInput'
          onChange={(e) => setForm({ ...form, storeName: e.target.value })}
          /> 
        </h2>
        <p>{foodItem.description}</p>
        <input
          type="text"
          value={active ? form.storeDescription : foodItem.description}
          disabled={!active}
          id='descriptionInput'
          onChange={(e) => setForm({ ...form, storeDescription: e.target.value })}
          />
      </div>

      <div className="menu-flex">
        <div>
          <p>{foodItem.price}:-</p>
          <input
          type="text"
          value={active ? form.storePrice : foodItem.price}
          disabled={!active}
          id='priceInput'
          onChange={(e) => setForm({ ...form, storePrice: e.target.value })}
          />
          <div className="cart-buttons">
            <button onClick={() => removeFromCart(foodItem)}>
              <img src={minusImg} alt="minus icon" />
            </button>
            <p>{num?.quantity ?? 0}</p>
            <button onClick={() => addToCart(foodItem)}>
              <img src={plusImg} alt="plus icon" />
            </button>
          </div>
        </div>
        <img src={foodItem.img} alt="food picture" />
        <input
          type="text"
          value={active ? form.storeImg : foodItem.img}
          disabled={!active}
          id='imgInput'
          onChange={(e) => setForm({ ...form, storeImg: e.target.value })} />

        <div className="button-container">
          <button className='pencil' 
          onClick={() => toggleItemActive(foodItem.id)}>{active ? <FontAwesomeIcon icon={faPencil} /> : <FontAwesomeIcon icon={faPencil} 
          disabled={!active} /> } </button>

          <button className='save-button' onClick={handleSaveButton}>
          <img src={checkbox} alt="checkbox icon" />
          </button>
          <button className='delete-button' onClick={handleDeleteMenuItem}>
          <img src={trash} alt="checkbox icon" />
          </button>
        </div>
      </div>
        </div>
  );
}

export default MenuItem;

import React, { useState } from "react";
import infoImg from "../../assets/information-svg.svg";
import minusImg from "../../assets/minus-svg.svg";
import plusImg from "../../assets/plus-svg.svg";
import useCartStore from "../../data/cartStore";
import { useEditMenuStore } from "../../data/menuStore.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';


function MenuItem({ foodItem, active }) {
  
  const { addToCart, removeFromCart, cart } = useCartStore();
  const {toggleItemActive} = useEditMenuStore()

  const { name: storeName, description: storeDescription, price: storePrice, img: storeImg, setName, setDescription, setPrice, setImg } = useEditMenuStore();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImg(URL.createObjectURL(file));
    }
  };

  function handleClick(operator, price, id) {
    console.log(price, id);

    if (operator === "+") {
    } else if (operator === "-") {
    }
  }

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
          value={active ? storeName : name}
          disabled={!active}
          id='nameInput'
          onChange={(e) => setName(e.target.value)}
          /> 
        </h2>
        <p>{foodItem.description}</p>
        <input
          type="text"
          value={active ? storeDescription : foodItem.description}
          disabled={!active}
          id='descriptionInput'
          onChange={(e) => setDescription(e.target.value)}
          />
      </div>

      <button className='pencil' 
      onClick={() => toggleItemActive(foodItem.altid)}>{active ? <FontAwesomeIcon icon={faPencil} /> : <FontAwesomeIcon icon={faPencil} 
      disabled={!active} /> } </button>


      <div className="menu-flex">
        <div>
          <p>{foodItem.price}:-</p>
          <input
          type="text"
          value={active ? storePrice : foodItem.price}
          disabled={!active}
          id='priceInput'
          onChange={(e) => setPrice(e.target.value)}
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
          value={active ? storeImg : foodItem.img}
          disabled={!active}
          id='imgInput'
          onChange={handleImageChange}
        
          />
      </div>
    </div>
  );
}

export default MenuItem;

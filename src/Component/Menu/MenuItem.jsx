import React, { useState } from "react";
import infoImg from "../../assets/information-svg.svg";
import minusImg from "../../assets/minus-svg.svg";
import plusImg from "../../assets/plus-svg.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { useEditMenuStore } from "../../store/menuStore.js";

function MenuItem({ name, price, description, img, id, active, changeActiveStateOnClick, }) {
  const [order, setOrder] = useState([
    {
      // price: 56+56-56
      // id: 12
    },
    
  ]);

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

  return (
    <div className="menu-item">
      <div>
        <h2>
          {name}
          <input
          type="text"
          value={active ? storeName : name}
          disabled={!active}
          id='nameInput'
          onChange={(e) => setName(e.target.value)}
          /> 
          <img src={infoImg} alt="information icon" />
        </h2>
        <p>{description}</p>
        <input
          type="text"
          value={active ? storeDescription : description}
          disabled={!active}
          id='descriptionInput'
          onChange={(e) => setDescription(e.target.value)}
          />

      </div>

      {/* {redigera ikon här}  */}
      <button className='pencil' 
      onClick={() => changeActiveStateOnClick(id)}>{active ? <FontAwesomeIcon icon={faPencil} /> : <FontAwesomeIcon icon={faPencil} 
      disabled={!active} /> } </button>

      {/* {papperskorg/checkbox knappar} */}

      <div className="menu-flex">
        <div>
          <p>{price}:-</p>
          <input
          type="text"
          value={active ? storePrice : price}
          disabled={!active}
          id='priceInput'
          onChange={(e) => setPrice(e.target.value)}
          />
          <div className="cart-buttons">
            <button onClick={() => handleClick("+", price, id)}>
              <img src={plusImg} alt="plus icon" />
            </button>
            <p>0</p>
            <button onClick={() => handleClick("-", price, id)}>
              <img src={minusImg} alt="minus icon" />
            </button>
          </div>
        </div>
        <img src={img} alt="food picture" />
        <input
          type="text"
          value={active ? storeImg : img}
          disabled={!active}
          id='imgInput'
          onChange={handleImageChange}
        
          />
      </div>
    </div>
  );
}

export default MenuItem;

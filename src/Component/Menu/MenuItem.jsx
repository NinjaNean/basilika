import React, { useState } from "react";
import infoImg from "../../assets/information-svg.svg";
import minusImg from "../../assets/minus-svg.svg";
import plusImg from "../../assets/plus-svg.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

function MenuItem({ name, price, description, img, id, active, changeActiveStateOnClick, handleImageChange}) {
  const [order, setOrder] = useState([
    {
      // price: 56+56-56
      // id: 12
    },
  ]);

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
          value={name}
          disabled={!active}
          id='nameInput'
          /> 
          <img src={infoImg} alt="information icon" />
        </h2>
        <p>{description}</p>
        <input
          type="text"
          value={description}
          disabled={!active}
          id='descriptionInput'
          />

      </div>

      {/* {här lägger du till redigera ikon}  */}
      <button className='pencil' 
      onClick={() => changeActiveStateOnClick(id)}>{active ? <FontAwesomeIcon icon={faPencil} disabled={!active}/> : <FontAwesomeIcon icon={faPencil} 
       /> } </button>

      <div className="menu-flex">
        <div>
          <p>{price}:-</p>
          <input
          type="text"
          value={price}
          disabled={!active}
          id='priceInput'
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
          value={img}
          disabled={!active}
          id='imgInput'
          onChange={handleImageChange}
          />
      </div>
    </div>
  );
}

export default MenuItem;

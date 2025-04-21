import React, { useState } from "react";
import infoImg from "../../assets/information-svg.svg";
import minusImg from "../../assets/minus-svg.svg";
import plusImg from "../../assets/plus-svg.svg";

function MenuItem({ name, price, description, img, id, active}) {
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
          {name} <img src={infoImg} alt="information icon" />
        </h2>
        <p>{description}</p>
      </div>

      {/* {här lägger vi till redigera ikon}  */}
      <button>{active ? 'spara' : 'redigera'}</button>

      <div className="menu-flex">
        <div>
          <p>{price}:-</p>
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
      </div>
    </div>
  );
}

export default MenuItem;

import React, { useState } from "react";
import infoImg from "../../assets/information-svg.svg";
import minusImg from "../../assets/minus-svg.svg";
import plusImg from "../../assets/plus-svg.svg";
import useCartStore from "../../data/cartStore";

function MenuItem({ foodItem }) {
  const [isVisible, setIsVisible] = useState(false);
  const { addToCart, removeFromCart, cart } = useCartStore();

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
        <h2>
          {foodItem.name}{" "}
          <img
            className="tooltip-container"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            src={infoImg}
            alt="information icon"
          />
          {isVisible && <span className="tooltip">{foodItem.allergens}</span>}
        </h2>
        <p>{foodItem.description}</p>
      </div>

      <div className="menu-flex">
        <div>
          <p>{foodItem.price}:-</p>
          <div className="cart-buttons">
            <button onClick={() => addToCart(foodItem)}>
              <img src={plusImg} alt="plus icon" />
            </button>
            <p>{num?.quantity ?? 0}</p>
            <button onClick={() => removeFromCart(foodItem)}>
              <img src={minusImg} alt="minus icon" />
            </button>
          </div>
        </div>
        <img src={foodItem.img} alt="food picture" />
      </div>
    </div>
  );
}

export default MenuItem;

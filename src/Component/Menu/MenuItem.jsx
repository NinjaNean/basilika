import React from "react";
import infoImg from "../../assets/information-svg.svg";
import minusImg from "../../assets/minus-svg.svg";
import plusImg from "../../assets/plus-svg.svg";

function MenuItem({ name, price, description, img }) {
  return (
    <div className="menu-item">
      <div>
        <h2>
          {name} <img src={infoImg} alt="information icon" />
        </h2>
        <p>{description}</p>
      </div>

      <div>
        <p>{price}:-</p>
        <div className="cart-buttons">
          <img src={plusImg} alt="plus icon" />
          <p>0</p>
          <img src={minusImg} alt="minus icon" />
        </div>
      </div>
      <img src={img} alt="food picture" />
    </div>
  );
}

export default MenuItem;

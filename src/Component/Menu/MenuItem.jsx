import React from "react";
import infoImg from "../../assets/information-svg.svg";
import minusImg from "../../assets/minus-svg.svg";
import plusImg from "../../assets/plus-svg.svg";

function MenuItem({ name, price, description, img }) {

  function handleClick() {
    // tillfällig
    return;
  }

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
         <button onClick={handleClick}><img src={plusImg} alt="plus icon" /></button>
          <p>0</p>
         <button onClick={handleClick}><img src={minusImg} alt="minus icon" /></button>
        </div>
      </div>
      <img src={img} alt="food picture" />
    </div>
  );
}

export default MenuItem;

import React from "react";
import MenuItem from "./MenuItem";
import infoImg from "../../assets/information-svg.svg";
import { menuData } from "../../Data.js/menuData.js";

function Menu() {
  return (
    <div className="menu">
      <p className="allergen-info">
        <img src={infoImg} alt="information icon" />
        Allergi information
      </p>

      {menuData.map((foodItem) => {
        return (
          <MenuItem
            key={foodItem.id}
            name={foodItem.name}
            price={foodItem.price}
            description={foodItem.description}
            img={foodItem.img}
          />
        );
      })}
    </div>
  );
}

export default Menu;

import React, { useState } from "react";
import MenuItem from "./MenuItem.jsx";
import infoImg from "../../assets/information-svg.svg";
import { menuData } from "../../data/menuData.js";

function Menu() {
  return (
    <div className="menu">
      <p className="allergen-info">
        <img src={infoImg} alt="information icon" />
        Allergi information
      </p>

      {menuData.map((foodItem) => {
        return (
          //om useState "tom" != foodItem.category då renderas h2 och useState byter värde.
          <MenuItem key={foodItem.id} foodItem={foodItem} />
        );
      })}
    </div>
  );
}

export default Menu;

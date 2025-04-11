import React from "react";
import MenuItem from "./MenuItem";
import infoImg from "../../assets/information-svg.svg";

function Menu() {
  return (
    <div className="menu">
      <p>
        <img src={infoImg} alt="information icon" />
        Allergi information
      </p>
      <MenuItem />
    </div>
  );
}

export default Menu;

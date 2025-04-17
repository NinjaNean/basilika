import React, { useEffect } from "react";
import MenuItem from "./MenuItem.jsx";
import infoImg from "../../assets/information-svg.svg";
import useCartStore from "../../data/cartStore.js";

function Menu() {
  const { foodDataList, totalPrice } = useCartStore();

  //För felsökning
  useEffect(() => {
    console.log(totalPrice);
  }, [totalPrice]);

  return (
    <div className="menu">
      <p className="allergen-info">
        <img src={infoImg} alt="information icon" />
        Allergi information
      </p>

      {foodDataList.map((foodItem) => {
        return <MenuItem key={foodItem.id} foodItem={foodItem} />;
      })}
    </div>
  );
}

export default Menu;

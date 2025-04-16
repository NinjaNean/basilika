import React, { useEffect } from "react";
import MenuItem from "./MenuItem.jsx";
import infoImg from "../../assets/information-svg.svg";
import useCartStore from "../../data/store/cartStore.js";

function Menu() {
  const { foodDataList, kundvagn } = useCartStore();

  //För felsökning
  useEffect(() => {
    console.log(kundvagn);
  }, [kundvagn]);

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

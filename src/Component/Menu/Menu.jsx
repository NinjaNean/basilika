import React, { useState } from "react";
import MenuItem from "./MenuItem.jsx";
import infoImg from "../../assets/information-svg.svg";
import { menuData } from "../../data/menuData.js";

function Menu() {

  // const [selectedImg, setSelectedImg] = useState(menuData[0].img)
    // const handleImageChange = (event) => {
    //   const file = event.taget.files [0]
    //   setSelectedImg(URL.createObjectURL(file))

    // }


  const [menuItems, setMenuItems] = useState(menuData);

  const changeActiveStateOnClick = (id) => {
      
    const updatedMenuItems = menuItems.map(menu =>{
      if (menu.id === id) {
        menu.active = !menu.active
        return menu
      }
      else {
        return menu
      }
      
    })
    console.log(updatedMenuItems)
    setMenuItems(updatedMenuItems)

  }
     return (
    <div className="menu">
      {/* <p className="allergen-info">
        <img src={infoImg} alt="information icon" />
        Allergi information
      </p> */}
      <div className="add-edit-buttons">
      <button className="edit-item-button">Redigera</button>
      <button className="add-item-button">Lägg till</button>
      </div>

      {menuItems.map((foodItem) => {
        return (
          //om useState "tom" != foodItem.category då renderas h2 och useState byter värde.
          <MenuItem
            key={foodItem.id}
            name={foodItem.name}
            price={foodItem.price}
            description={foodItem.description}
            img={foodItem.img}
            id={foodItem.id}
            active={foodItem.active}
            changeActiveStateOnClick={changeActiveStateOnClick}
            // handleImageChange={handleImageChange}
          />
        );
      })}
    </div>
  );
}

export default Menu;

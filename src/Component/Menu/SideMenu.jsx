import React from "react";
import sideMenuImg from "../../assets/chopsticks.svg";
import { HashLink } from "react-router-hash-link";

function SideMenu() {
  const sideMenu = ["Sushi", "Dumplings", "Snacks", "Drycker"];

  return (
    <div className="side-menu">
      {sideMenu.map((category) => {
        return (
          <div className="side-menu-option" key={category}>
            <img src={sideMenuImg} alt="Chopsticks" />
            <HashLink smooth to={`#${category}`}>
              {category}
            </HashLink>
          </div>
        );
      })}
    </div>
  );
}

export default SideMenu;

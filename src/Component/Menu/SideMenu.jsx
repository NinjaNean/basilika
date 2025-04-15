import React from "react";
// import sideMenuImg from "../../assets/chopsticks.svg"

function SideMenu() {
  const sideMenu = ["Sushi", "Dumplings", "Snacks", "Drycker"];

  return (
    <div className="side-menu">
      {sideMenu.map((category) => {
        return (
          <div className="side-menu-option" key={category}>
            {/* <img scr={sideMenuImg} alt="Chopsticks" /> */}
            <h3>{category}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default SideMenu;

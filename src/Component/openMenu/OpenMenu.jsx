import React from "react";
import { NavLink } from "react-router";
import "./OpenMenu.css";
import { useOpenMenuStore } from "../../data/openMenuStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";


const OpenMenu = () => {
  const isOpen = useOpenMenuStore((state) => state.isOpen);
  const closeMenu = useOpenMenuStore((state) => state.closeMenu);

  if (!isOpen) return null;
  console.log("isOpen:", isOpen);

  return (
    <div className="nav-links" onClick={closeMenu}>
      <NavLink to="/">Hem</NavLink>
      <NavLink to="/menu">Menu</NavLink>
      <NavLink to="/contact">Kontakta oss</NavLink>
      <NavLink to="/signin">Logga in <FontAwesomeIcon icon={faLock} className='lock'/></NavLink>
    </div>
  );
};

export default OpenMenu;

import React from "react";
import { NavLink } from "react-router";
import "./OpenMenu.css";
import { useOpenMenuStore } from "../../data/openMenuStore";


const OpenMenu = () => {
  const isOpen = useOpenMenuStore((state) => state.isOpen);
  const closeMenu = useOpenMenuStore((state) => state.closeMenu);

  if (!isOpen) return null;
  

  return (
    <div className="nav-links" onClick={closeMenu}>
      <NavLink to="/">Hem</NavLink>
      <NavLink to="/menu">Meny</NavLink>
      <NavLink to="/contact">Kontakta oss</NavLink>
    </div>
  );
};

export default OpenMenu;

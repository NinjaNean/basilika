import React from "react";
import { NavLink } from "react-router";
import "./OpenMenu.css";
import { useOpenMenuStore } from "../../data/openMenuStore";

const OpenMenu = () => {
  const isOpen = useOpenMenuStore((state) => state.isOpen);
  const closeMenu = useOpenMenuStore((state) => state.closeMenu);

  if (!isOpen) return null;
  console.log("isOpen:", isOpen);

  return (
    <div className="nav-links" onClick={closeMenu}>
      <ul onClick={closeMenu}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/menu">Menu</NavLink>
        </li>
        <li>
          <NavLink to="/signin">Sign In </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default OpenMenu;

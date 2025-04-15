
import React from 'react';
import './OpenMenu.css';

const OpenMenu = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <nav className="nav-links">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Sign In</a></li>
      </ul>
    </nav>
  );
};

export default OpenMenu;

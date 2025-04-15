import React, { useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo.png'; 
import OpenMenu from '../openMenu/OpenMenu.jsx'; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <FontAwesomeIcon
        icon={faBars}
        className="menu-icon"
        onClick={toggleMenu}
      />

      <OpenMenu isOpen={menuOpen} />
    </header>
  );
};

export default Header;
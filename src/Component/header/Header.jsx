import '../header/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="header-container">
        <div className="menu-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} className="menu-icon" />
          {menuOpen && (
            <nav className="nav-links">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Sign in</a></li>
              </ul>
            </nav>
          )}
        </div>
        <h1 className="header-title">Basil logo</h1>
      </div>
    </header>
  );
};

export default Header;
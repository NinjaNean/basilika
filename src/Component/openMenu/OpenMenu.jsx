import React, { useState } from 'react';

const OpenMenu = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
    
    return (

        <div className="menu-toggle" onClick={toggleMenu}>
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
);
}
export default OpenMenu;
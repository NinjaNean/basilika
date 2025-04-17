import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo.png'; 
import { useOpenMenuStore } from '../openMenu/store/openMenuStore.js';


const Header = () => {
  const toggleMenu = useOpenMenuStore((state) => state.toggleMenu);
  console.log(toggleMenu);

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
    </header>
  );
};

export default Header;
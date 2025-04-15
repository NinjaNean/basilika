import '../header/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo.png';

const Header = () => {


  return (
    <header>
    <div className="header-container">
      <FontAwesomeIcon icon={faBars} className="menu-icon" />
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
    </div>
  </header>
  
  );
};

export default Header;
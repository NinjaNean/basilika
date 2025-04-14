import '../header/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  return (
    <header>
      <div className="header-container">
        <h1 className="header-title">Basil logo</h1> 
        <div className="menu-toggle">
    
            <FontAwesomeIcon icon={faBars} />
       
        </div>
      </div>
    </header>
  );
}
export default Header;
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";
import { useOpenMenuStore } from "../../data/openMenuStore";



const Header = () => {
  const isOpen = useOpenMenuStore((state) => state.isOpen);
  const toggleMenu = useOpenMenuStore((state) => state.toggleMenu);
  console.log(toggleMenu);

  return (
    <header className="header-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <FontAwesomeIcon 
        icon={isOpen ? faXmark : faBars} 
        className="menu-icon" 
        onClick={toggleMenu} 
        style={{ color: isOpen ? "black" : "white", transition: "color 0.3s ease" }}/>
    </header>
  );
};

export default Header;

import Menu from "../../Component/menu/Menu.jsx";
import SideMenu from "../../Component/menu/SideMenu.jsx";
import "./Menu.css";
import heroImg from "../../assets/TemptAsian-Page-Header_1920x600-2.webp";
import Order from "../../Component/order/Order.jsx";

function MenuPage() {
  return (
    <div className="menu-page">
      <img className="menu-hero-img" src={heroImg} alt="" />
      <div className="menu-grid">
        <SideMenu />
        <Menu />
      </div>
      <Order />
    </div>
  );
}

export default MenuPage;

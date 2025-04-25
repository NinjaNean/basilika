import Menu from "../../component/Menu/Menu.jsx";
import SideMenu from "../../Component/menu/SideMenu.jsx";
import "./Menu.css";
import heroImg from "../../assets/TemptAsian-Page-Header_1920x600-2.webp";
import Order from "../../Component/order/Order.jsx";
import { useEffect } from "react";
import { getMenuFromAPI, saveFoodDataToAPI } from "../../data/jsonStorage.js";
import { menuData } from "../../data/menuData.js";

function MenuPage() {
  useEffect(() => {
    const fetchData = async () => {
      const result = await getMenuFromAPI();
      console.log(result);
    };

    fetchData();
  }, []);

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

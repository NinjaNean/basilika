import useCartStore from "../../data/cartStore";
import Menu from "../../component/Menu/Menu.jsx";
import SideMenu from "../../Component/menu/SideMenu.jsx";
import "./Menu.css";
import heroImg from "../../assets/TemptAsian-Page-Header_1920x600-2.webp";
import AddItem from "../../Component/add-item/AddItem.jsx";





function MenuPage() {
	const addFoodItem = useCartStore((state) => state.addFoodItem);
  
	const handleAddItem = (item) => {
	  addFoodItem(item); 
	};
	
  return (
	
    <div className="menu-page">
		<AddItem onAddItem={handleAddItem} />
     
      <img className="menu-hero-img" src={heroImg} alt="" />
      <div className="menu-grid">
        <SideMenu />
        <Menu />
      </div>
    </div>
  );
}

export default MenuPage;

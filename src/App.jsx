import { Outlet } from "react-router";
import "./App.css";
import Footer from "./Component/footer/Footer.jsx";
import Header from "./Component/header/Header.jsx";
import OpenMenu from "./Component/openMenu/OpenMenu.jsx";
import Order from "./Component/order/Order.jsx";


function App() {
  return (
    <>
      <header>
        <OpenMenu />
        <Header />
      </header>
      <main>
        <Order/>
        <Outlet />
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
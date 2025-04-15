import { NavLink, Outlet } from "react-router";
import "./App.css";
import Footer from "./Component/footer/Footer.jsx";

function App() {
  return (
    <>
      <header>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
        <NavLink to={"/menu"}>Menu</NavLink>
        <NavLink to={"/signIn"}>Sign in</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;

import { NavLink, Outlet } from "react-router";
import "./App.css";

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
      <footer></footer>
    </>
  );
}

export default App;

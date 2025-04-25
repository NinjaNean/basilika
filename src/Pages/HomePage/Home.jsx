import React from "react";
import "./Home.css";
import { NavLink } from "react-router";

function Home() {
  return (
    <section className="home-page">
      <img
        src="https://i0.wp.com/asiamixrestaurant.com/wp-content/uploads/2019/03/main_front_dark.jpg?fit=1440%2C1029&ssl=1"
        alt=""
      />
      <div className="welcome-text">
        <h1>Välkommen till Basil</h1>
        <p>
          En restaurang som bjuder på autentiska asiatiska smaker i en stilfull miljö. Vi kombinerar traditionella
          recept med högkvalitativa råvaror för att ge dig en matupplevelse utöver det vanliga. Hos oss möts östasiatisk
          elegans och god service – varje gång du besöker oss.
        </p>
        <NavLink className="primary-button" to="/menu">
          Gå till menyn
        </NavLink>
      </div>
    </section>
  );
}

export default Home;

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createHashRouter, RouterProvider } from "react-router";
import Home from "./Pages/Home.jsx";
import Contact from "./Pages/Contact.jsx";
import MenuPage from "./Pages/MenuPage/MenuPage.jsx";
import SignIn from "./Pages/SignIn.jsx";


let router = createHashRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/menu",
        Component: MenuPage,
      },
      {
        path: "/signin",
        Component: SignIn,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

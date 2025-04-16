import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Contact from "./Pages/Contact.jsx";
import Menu from "./Pages/Menu.jsx";
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
        Component: Menu,
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

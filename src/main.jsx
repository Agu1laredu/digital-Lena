import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import SobreMi from "./screen/SobreMi.jsx";
import TipsGratis from "./screen/TipsGratis.jsx";
import Servicios from "./screen/Servicio.jsx";
import Proyectos from "./screen/Proyectos.jsx";
import Certificaciones from "./screen/Certificaciones.jsx";
import Contacto from "./screen/Contacto.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/SobreMi",
    element: <SobreMi />,
  },
  {
    path: "/TipsGratis",
    element: <TipsGratis />,
  },
  {
    path: "/Servicios",
    element: <Servicios />,
  },
  {
    path: "/Proyectos",
    element: <Proyectos />,
  },
  {
    path: "/Certificaciones",
    element: <Certificaciones />,
  },
  {
    path: "/Contacto",
    element: <Contacto />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

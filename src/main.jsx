import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./estilos.css";
import App from "./App.jsx";
import Provider from "./context/Provider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>  
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
//main.jsx es el archivo principal de la aplicación, donde se renderiza el componente App dentro del contexto Provider. Además, se importan los estilos de Bootstrap y los estilos personalizados de la aplicación. 
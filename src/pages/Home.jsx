
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import Contexto from "../context/Contexto.jsx";
import { useContext } from "react";
import Swal from "sweetalert2";

import {
  faPaw,
  faCat,
  faHeart,
  faFish
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {

  const { usuario, cerrarSesion } = useContext(Contexto);

  const logout = () => {
    Swal.fire({
      icon: "success",
      title: "¡Hasta luego!",
      text: "Has cerrado sesión correctamente."
    });

    cerrarSesion();
  };

  return (
    <div className="home-page">
      <div className="home-card">

        <div className="decoracion-superior">
          <FontAwesomeIcon icon={faPaw} />
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faPaw} />
        </div>

        <FontAwesomeIcon
          icon={faCat}
          className="gatito-principal"
        />

        <h1>¡Bienvenido!</h1>

        <p>
          {usuario
            ? `Hola, ${usuario.usuario}!`
            : "¡Bienvenido a nuestra comunidad de gatitos!"}
        </p>

        <hr />

        <p className="mensaje-gatitos">
          Un espacio lleno de ternura, gatitos y patitas.
        </p>

        {/* Gatitos decorativos */}
        <div className="gatitos-decorativos">
          <FontAwesomeIcon icon={faCat} />
          <FontAwesomeIcon icon={faPaw} />
          <FontAwesomeIcon icon={faFish} />
          <FontAwesomeIcon icon={faCat} />
          <FontAwesomeIcon icon={faHeart} />
        </div>

        <div className="botones-home">

          <NavLink to="/login" className="btn btn-primary">
            Iniciar Sesión
          </NavLink>

          <NavLink to="/registro" className="btn btn-primary">
            Registrarse
          </NavLink>

        </div>

        <button className="btn btn-danger" onClick={logout}>
          Cerrar Sesión
        </button>

        <div className="huellitas-inferiores">
          <FontAwesomeIcon icon={faPaw} />
          <FontAwesomeIcon icon={faPaw} />
          <FontAwesomeIcon icon={faPaw} />
        </div>

      </div>
    </div>
  );
};

export default Home;

// Este archivo se encarga de mostrar la página de inicio de la aplicación,
// donde se muestra un mensaje de bienvenida y los botones para iniciar
// sesión o registrarse. Además, si el usuario está logueado,
// se muestra un mensaje personalizado y un botón para cerrar sesión.
